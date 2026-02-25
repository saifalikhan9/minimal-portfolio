import BlogsLanding from "@/src/components/Landings/Blogs";
import { Container } from "@/src/components/ui/Container";
import Projects from "@/src/components/Landings/Projects";
import { Quote } from "@/src/components/ui/Quote";
import { Hero } from "@/src/components/Landings/Hero";
import { Visitors } from "@/src/components/common/Visitors";
import { getSiteSettings } from "@/src/utils/getSiteSettings";
import {  getAnimeQuote } from "@/src/server-functions/getQuote";
import { GithubLanding } from "@/src/components/Landings/GithubLanding";
import { Suspense } from "react";
import { getGithubContributions } from "@/src/server-functions/githubContributions";

function getFallbackQuote() {

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
  const siteSettingsPromise = getSiteSettings();

  const quotePromise = getAnimeQuote().catch(() => null);


  const githubPromise = getGithubContributions();

  const [siteSettings, quoteData, contributions] =
    await Promise.all([
      siteSettingsPromise,
      quotePromise,
      githubPromise,
    ]);

  const data = quoteData ?? getFallbackQuote();

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-24 pb-12">
        <Hero resumeUrl={siteSettings.resumeUrl} />
        <Projects />
        <GithubLanding contributions={contributions}  />
        <BlogsLanding />

        <Quote
          className="m-2 my-20 md:mx-auto lg:max-w-200"
          text={data.quote}
          source={data.reference}
        />

        <div className="mt-20">

          <Suspense fallback={<div className="h-10" />}>
            <Visitors />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}




