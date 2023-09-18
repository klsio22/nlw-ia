import { FastifyInstance } from "fastify";
import fastifyMultipart from "@fastify/multipart";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import fs from "node:fs";
import { prisma } from "../lib/prisma";

const pump = promisify(pipeline);

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1_048_576 * 100, //100mb
    },
  });

  app.post("/videos", async (request, replay) => {
    const data = await request.file();

    if (!data) {
      return replay.status(400).send({ error: "Missing file input" });
    }

    const extension = path.extname(data.filename);

    if (extension !== ".mp3") {
      return replay
        .status(400)
        .send({ error: "invalid input type,please upload a MP3" });
    }

    //examples.mp3
    //examples
    const fileBaseName = path.basename(data.filename, extension);
    const fileUploadName = `${fileBaseName}${randomUUID()}${extension}`;

    const upLoadDescription = path.resolve(
      __dirname,
      "../../tmp",
      fileUploadName
    );

    await pump(data.file, fs.createWriteStream(upLoadDescription));

    const video = await prisma.video.create({
      data: {
        name: data.filename,
        path: upLoadDescription,
      },
    });

    return {
      video,
    };
  });
}
