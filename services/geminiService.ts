import { GoogleGenAI } from "@google/genai";
import { SCHOOL_NAME, SCHOOL_LOCATION } from '../constants';

// Initialize Gemini client only if API key is present
const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const SYSTEM_INSTRUCTION = `You are a helpful and friendly admissions assistant for ${SCHOOL_NAME}, located in ${SCHOOL_LOCATION}. 
Your goal is to answer questions from prospective students and parents about the school.
Key Details:
- We offer both Arts and Sciences curriculum (UNEB).
- We value both academic excellence and holistic growth through sports and clubs.
- Located in Kawempe-Kazo, a vibrant community.
- Fees are affordable and we offer bursaries for top performers.
- Facilities include a modern computer lab, library, and sports grounds.

Keep your answers concise (under 50 words where possible) and professional yet warm. If you don't know a specific detail like the exact current fee structure, ask them to contact the administration directly via the contact form.`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my AI brain isn't connected right now (API Key missing). Please contact the school directly.";
  }

  try {
    const model = ai.models;
    
    // Construct history for context
    // We'll just send the last few messages to keep it simple and stateless for this demo
    const conversationHistory = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));

    // Add the new user message
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...conversationHistory,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};