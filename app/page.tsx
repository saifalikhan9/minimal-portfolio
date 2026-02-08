import BlogsLanding from "@/src/components/Landings/Blogs";
import { Container } from "@/src/components/ui/Container";
import { GithubLanding } from "@/src/components/Landings/GithubLanding";
import Projects from "@/src/components/Landings/Projects";
import { Quote } from "@/src/components/ui/Quote";
import { Hero } from "@/src/components/Landings/Hero";
import { Visitors } from "@/src/components/common/Visitors";
import { getSiteSettings } from "@/src/utils/getSiteSettings";
import { AnimeQuote, getAnimeQuote } from "@/src/server-functions/getQuote";



// Helper: Returns a famous motivational anime quote and its reference
function getFallbackQuote() {
  // Array of the 5 most famous motivational anime quotes (with source)
  const quotes = [
    {
      quote:
        "When you give up, that's when the game ends.",
      reference: "Mitsuyoshi Anzai (Slam Dunk)",
    },
    {
      quote:
        "Hard work is worthless for those that don’t believe in themselves.",
      reference: "Naruto Uzumaki (Naruto)",
    },
    {
      quote:
        "It’s not the face that makes someone a monster; it’s the choices they make with their lives.",
      reference: "Naruto Uzumaki (Naruto Shippuden)",
    },
    {
      quote:
        "No one knows what the future holds. That’s why its potential is infinite.",
      reference: "Rintarou Okabe (Steins;Gate)",
    },
    {
      quote:
        "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.",
      reference: "Matsumoto Rangiku (Bleach)",
    },
  ];
  // The first one is probably the most famous and motivational.
  return quotes[0];
}

export default async function Home() {
  const { resumeUrl } = await getSiteSettings();


  let data: AnimeQuote | null = null

  try {
    data = await getAnimeQuote(); 


    if (!data) {
      data = getFallbackQuote();
    }

  } catch (error) {
    console.error("Failed to fetch quote:", error);
    // If fetch fails, fallback to anime quote
    data = getFallbackQuote();


  }
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-24 pb-12">
        <Hero resumeUrl={resumeUrl} />
        <Projects />
        <GithubLanding />
        <BlogsLanding />
        
          <Quote
            className="m-2 my-20 md:mx-auto lg:max-w-200"
            text={data.quote}
            source={data.reference}
          />
        
        <div className="mt-20">

          <Visitors />
        </div>
      </Container>
    </div>
  );
}




