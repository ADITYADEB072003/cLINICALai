import { GoogleGenerativeAI } from "@google/generative-ai";

export const useAIService = () => {
  // Initialize Google AI
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCTLJ2cemoCLBBeJGXMEewUq9x0fjtI8JY"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const generateAIResponse = async (query: string): Promise<string> => {
    try {
      // Enhanced clinical prompt with specific formatting instructions to avoid markdown
      const clinicalPrompt = `You are Athercare Clinical Assistant, an advanced AI designed to support healthcare professionals with evidence-based clinical information.

CRITICAL FORMATTING REQUIREMENTS:
- DO NOT use any markdown formatting symbols (**, *, #, etc.)
- DO NOT use asterisks or bold formatting
- Use plain text only with clear structure
- Use line breaks and spacing for organization
- Use bullet points with simple dashes (-) or numbers
- Use CAPITAL LETTERS for section headings when needed
- Keep responses professional and well-structured without markdown

RESPONSE STRUCTURE:
1. Brief clinical overview
2. Key diagnostic criteria or clinical features  
3. Evidence-based recommendations
4. Important considerations or contraindications
5. Recent guideline updates if applicable

EXAMPLE FORMAT:
CLINICAL OVERVIEW
Brief description here...

KEY FEATURES
- Feature one
- Feature two
- Feature three

RECOMMENDATIONS
- Recommendation one
- Recommendation two

If the question is not medical in nature, politely inform that you are designed to assist with clinical and medical queries only.

Clinical Query: ${query}

Please provide a well-structured, evidence-based response suitable for healthcare professionals using ONLY plain text formatting:`;

      const result = await model.generateContent(clinicalPrompt);
      let response = result.response.text();
      
      // Additional cleanup to remove any remaining markdown formatting
      response = response
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
        .replace(/\*(.*?)\*/g, '$1')     // Remove italic formatting
        .replace(/#{1,6}\s/g, '')        // Remove heading symbols
        .replace(/`(.*?)`/g, '$1')       // Remove code formatting
        .replace(/\[(.*?)\]\(.*?\)/g, '$1'); // Remove links but keep text
      
      return response;
    } catch (error) {
      console.error("AI generation error:", error);
      throw new Error("Failed to generate AI response");
    }
  };

  return { generateAIResponse };
};