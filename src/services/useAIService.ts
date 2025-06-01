import { GoogleGenerativeAI } from "@google/generative-ai";

export const useAIService = () => {
  // Initialize Google AI
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCTLJ2cemoCLBBeJGXMEewUq9x0fjtI8JY"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const generateAIResponse = async (query: string): Promise<string> => {
    try {
      // Doctor-centric prompt that focuses on providing clinical information
      const clinicalPrompt = `You are a clinical assistant for medical professionals. Provide evidence-based, concise information suitable for healthcare providers. Include relevant clinical guidelines, differential diagnoses, treatment options, and references where appropriate. If the question is not medical in nature, politely inform that you are designed to assist with clinical and medical queries only.
      
Clinical query: ${query}`;

      const result = await model.generateContent(clinicalPrompt);
      return result.response.text();
    } catch (error) {
      console.error("AI generation error:", error);
      throw new Error("Failed to generate AI response");
    }
  };

  return { generateAIResponse };
};