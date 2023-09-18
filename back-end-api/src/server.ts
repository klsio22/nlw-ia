import { fastify } from "fastify";
import { uploadVideoRoute } from "./routes/upload-video";
import { createdTranscriptionRoute } from "./routes/create-transcription";
import { getAllPromptsRoute } from "./routes/get-all-propmpts";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createdTranscriptionRoute);
app.register(generateAiCompletionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running!");
  });
