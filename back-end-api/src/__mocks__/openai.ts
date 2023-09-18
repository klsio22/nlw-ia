// __mocks__/openai.ts

export const audio = {
  transcriptions: {
    create: async (options) => {
      // Simule a resposta da API OpenAI com os dados desejados
      const mockResponse = {
        text: "Aqui está a transcrição simulada da API OpenAI.",
      };
      return Promise.resolve(mockResponse);
    },
  },
};
