/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */

import { IconBrandFramerMotion } from "@tabler/icons-react";
import NextJs from "../components/ui/icons/NextJs";
import ReactIcon from "../components/ui/icons/ReactIcon";
import TypeScript from "../components/ui/icons/TypeScript";
import PostgreSQL from "../components/ui/icons/PostgreSQL";
import { Nodejs } from "../components/ui/icons/Nodejs";
import { MongoDB } from "../components/ui/icons/MongoDB";
import Prisma from "../components/ui/icons/Prisma";
import JavaScript from "../components/ui/icons/JavaScript";
import Motion from "../components/ui/icons/Motion";



// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: Nodejs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Motion: Motion,
};

export const heroConfig = {
  // Personal Information
  name: 'Saif',
  title: 'A Full Stack web developer.',
  avatar: "/assets/avatar.JPG",

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Motion',
      href: 'https://bun.sh/',
      component: 'Motion',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>UI</b> design. Enthusiastic about <b>Three.js</b>, driven by a keen eye for design.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
// export const socialLinks = [
//   {
//     name: 'X',
//     href: 'https://x.com/ramxcodes',
//     icon: <X />,
//   },
//   {
//     name: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/ramxcodes/',
//     icon: <LinkedIn />,
//   },
//   {
//     name: 'Github',
//     href: 'https://github.com/ramxcodes',
//     icon: <Github />,
//   },
//   {
//     name: 'Email',
//     href: 'mailto:ramxcodes@gmail.com',
//     icon: <Mail />,
//   },
// ];