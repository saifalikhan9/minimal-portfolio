import BlogsLanding from "@/src/components/Landings/Blogs";
import { Container } from "@/src/components/ui/Container";
import Projects from "@/src/components/Landings/Projects";
import { Quote } from "@/src/components/ui/Quote";
import { Hero } from "@/src/components/Landings/Hero";
import { Visitors } from "@/src/components/common/Visitors";
import { getSiteSettings } from "@/src/utils/getSiteSettings";
import { getAnimeQuote, getRandomVerse } from "@/src/server-functions/getQuote";
import { GithubLanding } from "@/src/components/Landings/GithubLanding";
import { Suspense } from "react";
import { getGithubContributions } from "@/src/server-functions/githubContributions";
import { Heading } from "@react-email/components";

export default async function Home() {
  const siteSettingsPromise = getSiteSettings();

  const quotePromise = getAnimeQuote();

  const githubPromise = getGithubContributions();

  const data = await getRandomVerse();

  const [siteSettings, quoteData, contributions] = await Promise.all([
    siteSettingsPromise,
    quotePromise,
    githubPromise,
  ]);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-24 pb-12">
        <Hero resumeUrl={siteSettings?.resumeUrl || ""} />
        {/* experience */}
        <section id="experience" className="">
          <div className="mx-10 my-10">

          <p className="text-muted-forground py-2 pb-4 text-sm">Experience</p>
          <Heading as="h3">Gravity44 </Heading>
          <p className="text-muted-forground py-2 pb-4 text-xl">FrontEnd Developer</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae
            similique velit eveniet voluptate ipsum corrupti earum autem
            excepturi reiciendis. Possimus fuga dolores optio blanditiis totam
            iusto itaque dicta pariatur.
          </p>
          </div>
        </section>
        <Projects />
        <GithubLanding contributions={contributions} />
        <BlogsLanding />
        {data != null && (
          <Quote
            className="m-2 my-20 max-w-xl md:mx-auto lg:max-w-3xl"
            surah={data.varse.translation}
            surahNumber={data.surah.number}
            surahName={data.surah.name_english}
            ayah={data.varse.ayah}
          />
        )}

        <div className="mt-20">
          <Suspense fallback={<div className="h-10" />}>
            <Visitors />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
