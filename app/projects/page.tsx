import { ProjectsList } from "@/src/components/Projects/ProjectsList";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { SectionContainer } from "@/src/components/ui/SectionContainer";
import { getPageMetadata } from "@/src/config/Meta";
import { projects } from "@/src/constants/Projects";
import { Metadata } from "next";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";

export const generateMetadata = (): Metadata => {
  const metadata = getPageMetadata("/projects");
  return {
    ...metadata,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      } as Robots["googleBot"],
    },
  };
};

export default function Page() {
  return (
    <>
      <Container className="min-h-screen pt-20">
        <SectionContainer>
          <Heading>Projects </Heading>
          <div className="">
            <ProjectsList projects={projects} />
          </div>
        </SectionContainer>
      </Container>
    </>
  );
}
