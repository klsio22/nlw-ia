import { fastify } from "fastify";
import { getAllPromptsRoutes } from "./routes/get-all-propmpts";
import { uploadVideoRoute } from "./routes/upload-video";

const app = fastify();

app.register(getAllPromptsRoutes);
app.register(uploadVideoRoute);
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running!");
  });
