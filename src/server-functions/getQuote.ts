"use server"

// Type for the anime object
export type Anime = {
  id: number;
  name: string;
  altName?: string;
};

// Type for the character object
export type Character = {
  id: number;
  name: string;
};

// Type for the returned quote data
export type AnimeQuoteData = {
  content: string;
  anime: Anime;
  character: Character;
};

// Type for the top-level response from the API
export type AnimeQuoteApiResponse = {
  status: string;
  data: AnimeQuoteData;
};

export async function getAnimeQuote(): Promise<AnimeQuoteApiResponse["data"] |null> {
  try {
    const res = await fetch("https://api.animechan.io/v1/quotes/random");
    const data: AnimeQuoteApiResponse = await res.json();
    if (data.status === "success") {
      return data.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null
  }
}