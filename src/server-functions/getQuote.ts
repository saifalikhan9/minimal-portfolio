"use server"

import genAi from "@/src/utils/getGemini";
export type AnimeQuote = { quote: string; reference: string };

export async function getAnimeQuote(): Promise<AnimeQuote |null> {
    const prompt = `
    You are a JSON-only response generator.
    
    Rules:
    - Generate ONE short anime quote (max 30 words)
    - Quote must be from a real anime and the popular ones
    - Quotes must be motivational and related to that
    - No explanations, emojis, or extra text
    - Output ONLY valid JSON in the exact format below
    
    Output format:
    {
      "quote": "",
      "reference": "Anime Title – Character Name"
    }
    `;

  const result = await genAi.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });
  if (!result?.text) {
    throw new Error("AI response is empty");
  }

  const parsed = parseJson(result.text);

  if (!parsed) {
   console.log("not able to parse")
   return null
  }


  return parsed;
}


function parseJson(text: string): AnimeQuote | null {
    try {
      const cleaned = text
        .trim()
        .replace(/^```(json)?/i, "")
        .replace(/```$/, "")
        .trim();
  
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (!match) return null;
  
      return JSON.parse(match[0]) as AnimeQuote;
    } catch {
      return null;
    }
  }