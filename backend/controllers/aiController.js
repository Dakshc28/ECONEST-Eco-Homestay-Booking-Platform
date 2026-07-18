const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateTripPlan = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }

    const fullPrompt = `
You are an expert eco-tourism travel planner.

Create a personalized eco-friendly travel itinerary.

User Request:
${prompt}

Your response should include:

1. Suggested itinerary
2. Eco-friendly activities
3. Budget tips
4. Sustainable travel advice
5. Packing recommendations

Keep the response organized using headings and bullet points.
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: fullPrompt,
    });

    res.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateTripPlan,
};