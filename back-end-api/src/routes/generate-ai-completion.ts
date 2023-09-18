import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function generateAiCompletionRoute(app: FastifyInstance) {
  app.post("/ai/complete", async (request, reply) => {
    const bodySchema = z.object({
      videoId: z.string().uuid(),
      template: z.string(),
      temperature: z.number().min(0).max(1).default(0.5),
    });

    const { videoId, template, temperature } = bodySchema.parse(request.body);

    const video = await prisma.video.findFirstOrThrow({
      where: {
        id: videoId,
      },
    });

    if (!video.transcription)
      return reply
        .status(400)
        .send({ error: "Video transcription was not generated yet" });

    const promptMessage = template.replace(
      "{transcription}",
      video.transcription
    );

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature,
      messages: [{ role: "user", content: promptMessage }],
    });

    // Mock da resposta da OpenAI
    const mockResponse = {
      data: {
        id: "mocked-id",
        object: "chat.completion",
        created: 1234567890, // Timestamp
        model: "gpt-3.5-turbo",
        usage: {
          prompt_tokens: 20,
          completion_tokens: 30,
          total_tokens: 50,
        },
        choices: [
          {
            message: {
              role: "assistant",
              content: "This is a mocked response from GPT-3.5 Turbo.",
            },
            finish_reason: "stop",
          },
        ],
      },
    };

    return mockResponse;
  });
}
