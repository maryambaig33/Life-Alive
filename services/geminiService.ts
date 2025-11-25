import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, SYSTEM_INSTRUCTION } from "../constants";
import { ChatMessage } from "../types";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    try {
      // Access process.env.API_KEY directly so bundlers can replace it with the string literal.
      // We wrap it in a try-catch to safely handle cases where 'process' is not defined at runtime.
      const apiKey = process.env.API_KEY;
      
      if (apiKey) {
        aiClient = new GoogleGenAI({ apiKey });
      }
    } catch (e) {
      // Silently handle the error to prevent app crashes if process is undefined
      console.warn("API Key configuration issue.");
    }
  }
  return aiClient;
};

// Enhanced to accept the full history for context-aware replies
export const generateWellnessRecommendation = async (history: ChatMessage[]): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    // Graceful fallback if API key is missing
    return "I'm currently tuning into the universe but can't connect to my knowledge base right now. Please try exploring our menu below! 🌿";
  }

  // Format the menu data efficiently
  const menuContext = MENU_ITEMS.map(item => 
    `- ${item.name} (${item.category}, $${item.price}): ${item.description} [Ingredients: ${item.ingredients.join(', ')}] [Benefits: ${item.tags.join(', ')}]`
  ).join('\n');

  // Construct the conversation history for the model
  const conversationHistory = history
    .filter(msg => !msg.isLoading)
    .map(msg => `${msg.role === 'user' ? 'Customer' : 'Concierge'}: ${msg.text}`)
    .join('\n');

  const fullPrompt = `
    Current Conversation:
    ${conversationHistory}

    (Provide a helpful, vibrant, and concise response to the Customer's last message based on the Life Alive Menu provided in the system instructions. Do not repeat the menu list unless asked. Be brief and warm.)
  `;

  // Combine static system instruction with dynamic menu data
  const enhancedSystemInstruction = `
    ${SYSTEM_INSTRUCTION}

    HERE IS THE OFFICIAL MENU DATA YOU MUST USE:
    ${menuContext}
  `;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: enhancedSystemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't quite catch that vibe. Could you try asking in a different way? ✨";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently meditating and can't respond. Please try again later. 🙏";
  }
};