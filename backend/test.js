require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const models = await ai.models.list();

  console.log(models);
}

main().catch(console.error);