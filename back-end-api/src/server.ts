import { fastify } from "fastify";
import { getAllPromptsRoutes } from "./routes/get-all-propmpts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createdTranscriptionRoute } from "./routes/create-transcription";

const app = fastify();

app.register(getAllPromptsRoutes);
app.register(uploadVideoRoute);
app.register(createdTranscriptionRoute);

app
  .listen({
    port: 3334,
  })
  .then(() => {
    console.log("HTTP server running!");
  });
