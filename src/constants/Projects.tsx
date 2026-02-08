import {
  IconBrandNodejs,
  IconBrandTwitter,
  IconBrandX,
  IconGlobe,
} from "@tabler/icons-react";
import ExpressJs from "../components/ui/icons/ExpressJs";
import { MongoDB } from "../components/ui/icons/MongoDB";
import NextJs from "../components/ui/icons/NextJs";
import ReactIcon from "../components/ui/icons/ReactIcon";
import TailwindCss from "../components/ui/icons/TailwindCss";
import TypeScript from "../components/ui/icons/TypeScript";
import { Project } from "../types/Projects";
import Gemini from "../components/ui/icons/Gemini";
import { Nodejs } from "../components/ui/icons/Nodejs";
import { Redis } from "../components/ui/icons/Redis";
import { Vite } from "../components/ui/icons/Vite";

export const projects: Project[] = [
  {
    title: "Resume Roast",
    description:
      "Built Resume Roast, a fun AI-based resume review platform that gives blunt, actionable feedback instead of generic suggestions, making resume improvement engaging and memorable.",
      imageLink:
      "/assets/resume-roast.png",

      linkLink: "https://roast-resume-frontend.vercel.app/",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "Gemini SDK", icon: <Gemini key="Gemini" /> },
      { name: "Nodejs", icon: <Nodejs key="Nodejs" /> },
      { name: "Expressjs", icon: <MongoDB key="mongodb" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "Redis", icon: <Redis /> },
    ],
    githubLink: "https://github.com/saifalikhan9/roast_resume_frontend",
    details: true,
    projectDetailsPageSlug: "resume-roast",
    isWorking: true,
  },
  {
    title: "Neon Loop / E-Commerce wesite",
    description:
      "Developed a neon-themed selling platform with a secure backend using JWT authentication, role-based access control, backend-enforced pricing rules, and Razorpay payment integration for seamless transactions, along with a tasteful frontend featuring smooth micro-interactions built using React and the motion/react animation library.",
    imageLink: "/assets/Neon.png",

    linkLink: "https://neon-loop-frontend-66oi.vercel.app/",
    technologies: [
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "Reactjs", icon: <ReactIcon key="react" /> },
      { name: "Expressjs", icon: <ExpressJs key="express" /> },
      { name: "Nodejs", icon: <Nodejs key="nodejs" /> },
    ],
    githubLink: "https://github.com/saifalikhan9/neon-loop-backend",
    details: true,
    projectDetailsPageSlug: "neon-loop",
    isWorking: true,
  },
  {
    title: "LeetCode Whisper / Chrome Extension",
    description:
      "Built a Chrome extension that provides AI-powered hints for LeetCode problems without revealing full solutions. The extension extracts problem context directly from the DOM, refines and structures the data, and feeds it to an LLM with strict prompt constraints to generate conceptual guidance, edge-case reminders, and approach-level hints. Designed with responsible AI usage in mind, requiring users to supply their own API key while ensuring no credentials or problem data are stored.",
    imageLink:
      "https://github.com/saifalikhan9/Portfolio/blob/main/public/images/extention.jpg?raw=true",

    linkLink: "", // optional: Chrome Web Store or demo link if available
    technologies: [
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Vite", icon: <Vite key="vite" /> },
      // { name: "Chrome Extensions API", icon: <ChromeIcon key="chrome" /> },
    ],
    githubLink: "https://github.com/saifalikhan9/Extention",
    details: true,
    projectDetailsPageSlug: "leetcode-whisper",
    isWorking: true,
  },
  {
    title: "MCP Progress Poster",
    description:
      "Built a custom MCP (Model Context Protocol) server to automate build-in-public progress updates on Twitter while learning Data Structures and Algorithms. The system leverages AI-aware coding context from Visual Studio Code and GitHub Copilot, allowing a single natural-language prompt to generate and publish meaningful daily progress updates. Designed as a developer productivity tool that reduces friction, encourages consistency, and demonstrates real-world AI automation beyond traditional CRUD applications.",
    imageLink:
      "https://github.com/saifalikhan9/Portfolio/blob/main/public/images/mcp.jpg?raw=true",

    linkLink: "",
    technologies: [
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "Node.js", icon: <Nodejs /> },
      { name: "Twitter API", icon: <IconBrandX /> },
    ],
    githubLink: "https://github.com/saifalikhan9/MCP-Server-of-X",
    details: true,
    projectDetailsPageSlug: "mcp-x-automator",
    isWorking: true,
  },
];
