
import genAi from "@/src/utils/getGemini";
import { NextRequest, NextResponse } from "next/server";

type AnimeQuote = {
  quote: string;
  reference: string;
};

export const GET = async (_req: NextRequest) => {
  try {
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

    // const result = await genAi.models.list();
    const result = await genAi.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });
    // console.log(result);

    if (!result?.text) {
      throw new Error("AI response is empty");
    }

    const parsed = parseJson(result.text);

    if (!parsed) {
      throw new Error("Invalid JSON from AI");
    }

    return NextResponse.json({ data: parsed });
  } catch (error) {
    console.error("Anime quote error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};

/**
 * Extracts and parses the first JSON object from AI output
 */
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
