import BlogsLanding from "@/src/components/Landings/Blogs";
import { Container } from "@/src/components/ui/Container";
import Projects from "@/src/components/Landings/Projects";
import { Quote } from "@/src/components/ui/Quote";
import { Hero } from "@/src/components/Landings/Hero";
import { Visitors } from "@/src/components/common/Visitors";
import { getSiteSettings } from "@/src/utils/getSiteSettings";
import { GithubLanding } from "@/src/components/Landings/GithubLanding";
import { Suspense } from "react";
import { getGithubContributions } from "@/src/server-functions/githubContributions";
import { Heading } from "@/src/components/ui/Heading";
import { SectionContainer } from "@/src/components/ui/SectionContainer";
import { getRandomQuote } from "@/src/utils/getRandomQuotes";

export default async function Home() {
  const siteSettingsPromise = getSiteSettings();

  const githubPromise = getGithubContributions();

  const data = getRandomQuote();

  const [siteSettings, contributions] = await Promise.all([
    siteSettingsPromise,
    githubPromise,
  ]);
  const experiencePoints = [
    "Developed and maintained web applications using Next.js, Tailwind CSS, and Framer Motion, ensuring seamless experiences across desktop, tablet, and mobile devices.",

    "Built a CI/CD pipeline using GitHub Actions to automatically  build and deploy the application to an AWS EC2 development server, streamlining releases and eliminating manual deployment steps.",

    "Customized application theming and design systems to align with client branding requirements while collaborating directly with stakeholders to deliver scalable, production-ready solutions.",
  ];
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-24 pb-12">
        <SectionContainer>
          <Hero resumeUrl={siteSettings?.resumeUrl || ""} />
        </SectionContainer>
        {/* experience */}
        <div className="bg-forground h-px w-full mask-x-from-10%" />

        <SectionContainer id="experience">
          <Heading className="md:text-3xl">Experience</Heading>
          <div className="inline-flex w-full justify-between">
            <div className="inline-flex items-center gap-2">
              <h2 className="text-xl font-bold">Gravity44</h2>

              {/* <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500 bg-green-500/10 px-2 py-1 text-xs font-medium">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Working
              </span> */}
            </div>
            <p className="text-secondary text-xs md:text-sm">
              March 2026 - July 2026
            </p>
          </div>
          <div className="my-1 inline-flex w-full justify-between">
            <p className="text-muted-forground text-base font-medium">
              Frontend Developer Intern
            </p>
            <p className="text-secondary text-xs md:text-sm">Noida (Remote)</p>
          </div>

          <ul className="text-secondary max-w-3xl list-disc space-y-2 py-2 pl-5 text-sm md:text-base">
            {experiencePoints.map((point, index) => (
              <li key={index} className={index === 1 ?"font-bold":""}  >{point}</li>
            ))}
          </ul>
        </SectionContainer>

        <Projects />
        <GithubLanding contributions={contributions} />
        <BlogsLanding />

        <Quote character={data.character} anime={data.anime} quote={data.quote} className="m-2 my-20 max-w-xl md:mx-auto lg:max-w-3xl" />

        <div className="mt-20">
          <Suspense fallback={<div className="h-10" />}>
            <Visitors />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
