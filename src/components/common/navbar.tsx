"use client";
import { Container } from "../ui/Container";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import {
  useMotionValueEvent,
  motion,
  AnimatePresence,
  useScroll,
} from "motion/react";
import { useEffect, useState } from "react";
import { CloseIcon } from "../ui/icons/CloseIcon";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { cn } from "@/src/lib/utils";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    setMounted(true);
  },[]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const NavItems = [
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <Container className="">
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          width: scrolled ? (innerWidth >= 1024 ? "50%" : "82%") : "100%",
          transition: { duration: 0.5, ease: "easeInOut" },
          y: scrolled ? 10 : 0,
        }}
        className={cn(
          "fixed inset-x-0 top-3 z-40 mx-auto w-full  max-w-92 rounded-3xl md:max-w-206 md:p-1",
          "dark: text-secondary",
        )}
      >
        <div className="relative flex w-full items-center justify-between pr-2">
          <Link href="/">
            <Image
              className="size-13 rounded-full object-cover p-1 transition-all duration-180 ease-in-out hover:scale-110 md:size-10 md:p-0"
              width={100}
              height={100}
              src="https://github.com/saifalikhan9/Portfolio/blob/main/public/images/dp.jpg?raw=true"
              alt=""
            />
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div
                onMouseLeave={() => setHovered(null)}
                className="hidden items-center gap-2 text-sm md:flex"
              >
                {NavItems.map((item, index) => (
                  <Link
                    className="group relative px-2 py-1 text-sm"
                    key={index}
                    href={item.href}
                    onMouseEnter={() => setHovered(index)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {hovered === index && (
                      <motion.span
                        style={{
                          backgroundColor:
                            theme === "dark"
                              ? "var(--color-neutral-100)"
                              : "var(--color-neutral-800)",
                        }}
                        layoutId="hovered"
                        className="absolute inset-0 h-full w-full rounded-xl dark:bg-neutral-800"
                      />
                    )}
                    <span className="relative z-10 group-hover:text-neutral-200 dark:group-hover:text-neutral-800">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="relative flex items-center justify-center px-2 text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 md:hidden dark:border-neutral-800/70 dark:text-white dark:hover:bg-neutral-900"
              >
                <CloseIcon isOpen={isMenuOpen} />
              </button>
            </div>
            {mounted && (
              <div className="hidden lg:block">
                {theme === "dark" ? (
                  <button
                    onClick={() => {
                      setTheme("light");
                    }}
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
                    onClick={() => {
                      setTheme("dark");
                    }}
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
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-12 right-0 mt-3 flex w-full flex-col gap-1 rounded-3xl border border-neutral-200/60 bg-white/80 p-2 text-sm shadow-2xl backdrop-blur md:hidden dark:border-neutral-800/60 dark:bg-neutral-900/80"
                >
                  {NavItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="relative px-3 py-2"
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {hovered === index && (
                        <motion.span
                          layoutId="hovered"
                          style={{
                            backgroundColor: scrolled
                              ? "var(--color-neutral-100)"
                              : "var(--color-neutral-200)",
                          }}
                          className="absolute inset-0 h-full w-full rounded-2xl dark:bg-neutral-800"
                        />
                      )}
                      <span className="relative z-10 text-2xl md:text-sm">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                  <div className="mx-3">
                    {theme === "dark" ? (
                      <button
                        onClick={() => {
                          setTheme("light");
                        }}
                        className={cn(
                          "dark cursor-pointer rounded-lg p-[0.4rem]",

                          "text-neutral-600 dark:text-white",

                          "hover:bg-neutral-300 dark:bg-black dark:hover:bg-neutral-900",

                          "inset-shadow-[1px_1px_4px_2.3px_rgba(0,0,0,0.1)] dark:ring dark:inset-shadow-[0_1px_2px_var(--color-neutral-500),0_-2px_4px_var(--color-neutral-500)] dark:ring-neutral-500",

                          "transition-all duration-200 active:scale-90",
                        )}
                      >
                        <IconSunFilled className="md:4 size-7 transition-all duration-200" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setTheme("dark");
                        }}
                        className={cn(
                          "cursor-pointer rounded-lg p-[0.4rem]",

                          "text-neutral-600 dark:text-white",

                          "hover:bg-neutral-300 dark:bg-black dark:hover:bg-neutral-900",

                          "inset-shadow-[1px_1px_4px_2.3px_rgba(0,0,0,0.1)] dark:ring dark:inset-shadow-[0_1px_2px_var(--color-neutral-500),0_-2px_4px_var(--color-neutral-500)] dark:ring-neutral-500",

                          "transition-all duration-200 active:scale-90",
                        )}
                      >
                        <IconMoonFilled className="md:4 size-7 transition-all duration-200" />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </Container>
  );
};
