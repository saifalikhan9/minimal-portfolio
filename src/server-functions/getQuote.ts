"use server"

import { client } from "../utils/get-AI-Client";


export type AnimeQuote = { quote: string; reference: string };

export async function getAnimeQuote() {
    const prompt = `
    You are a JSON-only response generator.
    
    Rules:
    - Generate ONE random short anime quote (max 30 words)
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
    const result = await client.chat.complete({
      model: "mistral-large-latest",
      temperature: 0.9, 
      topP:0.95,
      messages: [{role: 'user', content: prompt}]
  });
 
  if (!result) {
    throw new Error("AI response is empty");
  }
  const message = result.choices[0].message.content 
  if(!message){
    throw new Error("AI response message is empty");
  }

  const parsed = parseJson(message as string);

  if (!parsed) {
   console.log("not able to parse")
   return null
  }


return parsed

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