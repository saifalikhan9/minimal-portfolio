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
      <Container className="flex items-center justify-between py-4">
        <div className="shadow-sectionInset dark:shadow-sectionInset-dark absolute inset-0 left-0 h-full w-full border-t border-neutral-300 dark:border-neutral-700"></div>

        <SubHeading>Built with love by Saif Ali Khan</SubHeading>
        <div className="relative z-10 flex items-center justify-center gap-4 px-4">
          <Link href={"https://x.com/vizier_108"}>
            <IconBrandX
              size={20} 
              className="text-neutral-500 transition-all duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/saifalikhan10/"}>
            <IconBrandLinkedin
              size={20}
              className="text-neutral-500 transition-all duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
            />
          </Link>
          <Link href={"https://github.com/saifalikhan9"}>
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
