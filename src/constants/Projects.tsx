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
import { IconBrandX } from "@tabler/icons-react";

export const projects: Project[] = [
  {
    title: "Second Brain / AI Knowledge Management",
    date: "2026-06-15",
    description:
      "Built an AI-powered knowledge management platform that lets users save content from YouTube, Twitter/X, LinkedIn, and websites. Implemented semantic search using vector embeddings, enabling natural-language retrieval of saved content without relying on exact keywords.",
    imageLink: "/assets/second-brain.png",
    linkLink: "",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwind" /> },
      { name: "Node.js", icon: <Nodejs key="nodejs" /> },
      { name: "MongoDB", icon: <MongoDB key="mongodb" /> },
      { name: "Gemini", icon: <Gemini key="gemini" /> },
    ],
    githubLink: "https://github.com/saifalikhan9/YOUR_REPO",
    details: true,
    projectDetailsPageSlug: "second-brain",
    isWorking: true,
  },
  {
    title: "AI-Assisted Job Application Tracker",
    date: "2025-06-15",
    description:
      "Built a Kanban-style job application tracker that uses AI to extract structured information directly from job descriptions. Users can paste a job posting, and the system automatically identifies details such as company, role, location, and requirements before creating a new board entry. Implemented drag-and-drop workflow management, persistent state updates, and an intuitive application pipeline across stages like Applied, Interviewing, and Offer.",
    imageLink: "/assets/kanban.png",

    linkLink: "https://ai-assisted-job-application-tracker-hazel.vercel.app/",

    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwind" /> },
      { name: "Gemini", icon: <Gemini key="gemini" /> },
    ],

    githubLink:
      "https://github.com/saifalikhan9/AI-Assisted-Job-Application-Tracker",

    details: true,
    projectDetailsPageSlug: "ai-job-tracker",
    isWorking: true,
  },
  {
    title: "Resume Roast",
    date: "2025-09-20",
    description:
      "Built Resume Roast, an AI-powered resume review platform that delivers brutally honest yet actionable feedback, helping users improve their resumes through engaging and memorable critiques.",
    imageLink: "/assets/resume-roast.png",
    linkLink: "https://roast-resume-frontend.vercel.app/",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "Gemini SDK", icon: <Gemini key="gemini" /> },
      { name: "Node.js", icon: <Nodejs key="nodejs" /> },
      { name: "MongoDB", icon: <MongoDB key="mongodb" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "Redis", icon: <Redis key="redis" /> },
    ],
    githubLink: "https://github.com/saifalikhan9/roast_resume_frontend",
    details: true,
    projectDetailsPageSlug: "resume-roast",
    isWorking: true,
  },

  {
    title: "Neon Loop / E-Commerce Website",
    date: "2025-08-10",
    description:
      "Developed a full-stack e-commerce platform with JWT authentication, role-based access control, Razorpay integration, and backend-enforced pricing rules, paired with a modern frontend featuring smooth animations and micro-interactions.",
    imageLink: "/assets/Neon.png",
    linkLink: "https://neon-loop-frontend-66oi.vercel.app/",
    technologies: [
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React.js", icon: <ReactIcon key="react" /> },
      { name: "Express.js", icon: <ExpressJs key="express" /> },
      { name: "Node.js", icon: <Nodejs key="nodejs" /> },
    ],
    githubLink: "https://github.com/saifalikhan9/neon-loop-backend",
    details: true,
    projectDetailsPageSlug: "neon-loop",
    isWorking: true,
  },

  {
    title: "LeetCode Whisper / Chrome Extension",
    date: "2025-01-01",
    description:
      "Built a Chrome extension that provides AI-powered hints for LeetCode problems without revealing solutions. Extracts problem context from the page and generates conceptual guidance, edge-case reminders, and problem-solving hints using an LLM.",
    imageLink:
      "https://github.com/saifalikhan9/Portfolio/blob/main/public/images/extention.jpg?raw=true",
    linkLink: "",
    technologies: [
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Vite", icon: <Vite key="vite" /> },
    ],
    githubLink: "https://github.com/saifalikhan9/Extention",
    details: true,
    projectDetailsPageSlug: "leetcode-whisper",
    isWorking: true,
  },

  {
    title: "MCP Progress Poster",
    date: "2024-12-01",
    description:
      "Built a custom MCP server that automates build-in-public updates on Twitter/X using AI-aware coding context from VS Code and GitHub Copilot, generating meaningful progress updates from natural-language prompts.",
    imageLink:
      "https://github.com/saifalikhan9/Portfolio/blob/main/public/images/mcp.jpg?raw=true",
    linkLink: "",
    technologies: [
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Node.js", icon: <Nodejs key="nodejs" /> },
      { name: "Twitter API", icon: <IconBrandX key="twitter" /> },
    ],
    githubLink: "https://github.com/saifalikhan9/MCP-Server-of-X",
    details: true,
    projectDetailsPageSlug: "mcp-x-automator",
    isWorking: true,
  },
];
