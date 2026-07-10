"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { cn } from "@/src/lib/utils";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const NavItems = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Handle mounting and scroll state
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="">
      <header
        className={cn(
          "fixed top-3 left-1/2 z-100 flex w-full max-w-94 -translate-x-1/2 items-center justify-between gap-3 rounded-full p-1 transition-all duration-500 ease-in-out md:max-w-[51rem]",
          scrolled
            ? "shadow-custom w-85 translate-y-5 backdrop-blur-md md:w-160"
            : "",
        )}
      >
        <div className="inline-flex items-end gap-2">
          <Link href="/">
            <Image
              className="size-10 rounded-full object-cover transition-transform hover:scale-110"
              width={40}
              height={40}
              src="https://github.com/saifalikhan9/Portfolio/blob/main/public/images/dp.jpg?raw=true"
              alt="Profile"
              priority
            />
          </Link>
          <nav
            onMouseLeave={() => setHoveredPath(null)}
            className="flex items-center  md:gap-2"
          >
            {NavItems.map((item) => {
              const isActive = pathname === item.href;
              const isHovered = hoveredPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  className={cn(
                    "relative rounded-full px-2 md:px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive ? "text-muted-background" : "text-muted-forground",
                    isHovered && "text-background",
                  )}
                >
                  <span className="relative z-10">{item.title}</span>

                  {/* 2. Layout Animation on Hover */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover"
                      className="hidden md:block bg-forground absolute inset-0 z-0 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-forground hover:bg-muted-forground/20 rounded-full p-2 transition-all duration-300 ease-in-out"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <IconSunFilled size={18} />
            ) : (
              <IconMoonFilled size={18} />
            )}
          </button>
        )}
      </header>
    </Container>
  );
};
