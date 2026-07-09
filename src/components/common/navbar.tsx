"use client";
import { Container } from "../ui/Container";
import Image from "next/image";
import { Link } from "next-view-transitions";
import {
  useMotionValueEvent,
  motion,
  AnimatePresence,
  useScroll,
} from "motion/react";
import { useEffect, useState } from "react";

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { cn } from "@/src/lib/utils";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const pathname = usePathname();

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Set initial size
    setIsDesktop(window.innerWidth >= 1024);

    // Update on resize
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const NavItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
  ];

  const highlightedIndex =
    hovered !== null
      ? hovered
      : NavItems.findIndex((item) => item.href === pathname);

  return (
    <>
      <Container className="">
        <motion.nav
          animate={{
            boxShadow: scrolled ? " var(--shadow-custom)" : "none",
            backdropFilter: scrolled ? "blur(10px)" : "none",

            width: scrolled ? (isDesktop ? "50%" : "82%") : "100%",
            transition: { duration: 0.5, ease: "easeInOut" },
            y: scrolled ? 10 : 0,
          }}
          className={cn(
            "fixed inset-x-0 top-3 z-50 mx-auto w-full max-w-92 rounded-3xl md:max-w-206 md:p-1",
            "dark:text-secondary",
          )}
        >
          <div className="relative flex w-full items-center justify-between pr-2">
            <Link href="/">
              <Image
                className="size-13 rounded-full object-cover p-1 transition-all duration-180 ease-in-out hover:scale-110 md:size-10 md:p-0"
                width={100}
                height={100}
                src="https://github.com/saifalikhan9/Portfolio/blob/main/public/images/dp.jpg?raw=true"
                alt="Profile Picture"
                priority
              />
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center text-sm md:gap-2"
                >
                  {NavItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onMouseEnter={() => setHovered(index)}
                      className="relative px-2 py-1 text-sm"
                    >
                      {mounted && highlightedIndex === index && (
                        <motion.span
                          layoutId="nav-item-hovered"
                          style={{
                            backgroundColor:
                              theme === "dark"
                                ? "var(--color-neutral-100)"
                                : "var(--color-neutral-800)",
                          }}
                          className="absolute inset-x-0 bottom-px mx-2 h-px rounded-xl md:bottom-0 md:mx-0 md:h-full"
                        />
                      )}

                      <span
                        className={cn(
                          "relative z-10 transition-colors duration-200",
                          highlightedIndex === index
                            ? "text-background"
                            : "text-foreground",
                        )}
                      >
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              {mounted && (
                <div className="">
                  {theme === "dark" ? (
                    <button
                      onClick={() => setTheme("light")}
                      className={cn(
                        "dark cursor-pointer rounded-lg p-[0.4rem]",
                        "text-neutral-600 dark:text-white",
                        "hover:bg-neutral-300 dark:bg-black dark:hover:bg-neutral-900",
                        "inset-shadow-[1px_1px_4px_2.3px_rgba(0,0,0,0.1)] dark:ring dark:inset-shadow-[0_1px_2px_var(--color-neutral-500),0_-2px_4px_var(--color-neutral-500)] dark:ring-neutral-500",
                        "transition-all duration-200 active:scale-90",
                      )}
                    >
                      <IconSunFilled
                        size={18}
                        className="transition-all duration-200"
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => setTheme("dark")}
                      className={cn(
                        "cursor-pointer rounded-lg p-[0.4rem]",
                        "text-neutral-600 dark:text-white",
                        "hover:bg-neutral-300 dark:bg-black dark:hover:bg-neutral-900",
                        "inset-shadow-[1px_1px_4px_2.3px_rgba(0,0,0,0.1)] dark:ring dark:inset-shadow-[0_1px_2px_var(--color-neutral-500),0_-2px_4px_var(--color-neutral-500)] dark:ring-neutral-500",
                        "transition-all duration-200 active:scale-90",
                      )}
                    >
                      <IconMoonFilled
                        size={18}
                        className="transition-all duration-200"
                      />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.nav>
      </Container>
    </>
  );
};
