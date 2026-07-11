import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SubHeading } from "../ui/Subheading";

export const Footer = () => {
  return (
    <footer className="">
      <Container className="px4 flex items-center justify-between py-4 md:px-10">
        <div className="shadow-sectionInset dark:shadow-sectionInset-dark absolute inset-0 left-0 h-full w-full border-t border-neutral-300 dark:border-neutral-700" />

        <SubHeading>Built with love by Saif Ali Khan</SubHeading>
        <div className="relative z-10 flex items-center justify-center gap-4">
          <Link target="_blank" href={"https://x.com/vizier_108"}>
            <IconBrandX
              size={20}
              className="text-neutral-500 transition-all duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            />
          </Link>
          <Link target="_blank" href={"https://www.linkedin.com/in/saifalikhan10/"}>
            <IconBrandLinkedin
              size={20}
              className="text-neutral-500 transition-all duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            />
          </Link>
          <Link target="_blank" href={"https://github.com/saifalikhan9"}>
            <IconBrandGithub
              size={20}
              className="text-neutral-500 transition-all duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
