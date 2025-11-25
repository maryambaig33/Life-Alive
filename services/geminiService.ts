import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
};

export const generateWellnessRecommendation = async (userQuery: string): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "I'm having trouble connecting to my wellness senses right now (API Key missing). Please try exploring the menu manually! 🌿";
  }

  // Enhance context with the actual menu data stringified
  const menuContext = MENU_ITEMS.map(item => 
    `${item.name} (${item.category}): ${item.description}. Ingredients: ${item.ingredients.join(', ')}. Benefits: ${item.tags.join(', ')}.`
  ).join('\n');

  const fullPrompt = `
    Context: Here is the Life Alive Menu:
    ${menuContext}

    User Query: "${userQuery}"

    Based on the menu above, provide a personalized recommendation.
  `;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't quite catch that vibe. Could you try asking in a different way? ✨";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently meditating and can't respond. Please try again later. 🙏";
  }
};
