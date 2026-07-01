"use server";

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

export async function getAnimeQuote(): Promise<
  AnimeQuoteApiResponse["data"] | null
> {
  try {
    const res = await fetch("https://api.animechan.io/v1/quotes/random");
    const data: AnimeQuoteApiResponse = await res.json();
    if (data.status === "success") {
      return data.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getRandomVerse() {
  try {
    const res = await fetch("https://ummahapi.com/api/quran/random");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("failed to fetch ");
    }

    const quote = {
      success: data.success,
      surah: data.data.surah,
      varse: {
        ayah: data.data.verse.ayah,
        arabic: data.data.verse.arabic,
        translation: data.data.verse.translations.sahih_international,
      },
    };

    return quote;
  } catch (error) {
    console.log(error);
    return null;
  }
}
