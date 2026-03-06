import BlogsLanding from "@/src/components/Landings/Blogs";
import { Container } from "@/src/components/ui/Container";
import Projects from "@/src/components/Landings/Projects";
import { Quote } from "@/src/components/ui/Quote";
import { Hero } from "@/src/components/Landings/Hero";
import { Visitors } from "@/src/components/common/Visitors";
import { getSiteSettings } from "@/src/utils/getSiteSettings";
import { getAnimeQuote } from "@/src/server-functions/getQuote";
import { GithubLanding } from "@/src/components/Landings/GithubLanding";
import { Suspense } from "react";
import { getGithubContributions } from "@/src/server-functions/githubContributions";


export default async function Home() {
  const siteSettingsPromise = getSiteSettings();

  const quotePromise = getAnimeQuote();


  const githubPromise = getGithubContributions();

  const [siteSettings, quoteData, contributions] =
    await Promise.all([
      siteSettingsPromise,
      quotePromise,
      githubPromise,
    ]);


  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-24 pb-12">
        <Hero resumeUrl={siteSettings.resumeUrl} />
        <Projects />
        <GithubLanding contributions={contributions} />
        <BlogsLanding />
        {
          quoteData  && <Quote
            className="m-2 my-20 md:mx-auto lg:max-w-200"
            content={quoteData.content}
            anime={quoteData.anime.name}
            character={quoteData.character.name}

          />
        }




        <div className="mt-20">

          <Suspense fallback={<div className="h-10" />}>
            <Visitors />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}




