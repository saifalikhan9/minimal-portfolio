import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Tooltip } from "@/src/components/ui/tool-tip";
import { Timeline } from "@/src/components/ui/Timeline";
import { mySkills } from "@/src/config/About";






const data = [
  {
    year: 2025,
    achievements: [
      {
        text: "Complited B.Tech ",
        subText: "Completed B.Tech with 7.82 CGPA"
      }, {
        text: "Full-Stack Journey 🔩",
        subText: "Learnt NodeJS, MongoDB, MySQL along with React and the best practices to build products and web apps which can scale easily."
      }],
  },
  {
    year: 2023,
    achievements: [
      {
        text: "Developed interest in Web Development 🚀",
        subText: "One of my friends introduced me to Web Development. I started off by making simple HTML, CSS websites with a keen interest in design. "
      }, {
        text: "First Back 😂",
        subText: "I consider this an achievement. Neural Networks challenged me, and that challenge helped me grow as a CS engineer."
      }],
  },
  {
    year: 2021,
    achievements: [
      {
        text: "Started College 🔥",
        subText: "Opted for Computer Science B.Tech Degree from Gurugram University. Haryana"
      }, {
        text: "C and C++ 🙌🏻",
        subText: "Started learning logics and basic programming fundamentals with Object Oriented Programming. C was intimidating, C++ was fun."

      }],
  },
  {
    year: 2020,
    achievements: [
      {
        text: "Completed 12th Grade 📜",
        subText: "Completed 12th grade with 69.6% Marks in Science stream. Again, a big achievement for me"
      },
      {
        text: "Covid-19 Happend in India ",
        subText: "This is the time when I started to learn Java from Apna College."
      },
    ],
  },
  {
    year: 2017,
    achievements: [
      {
        text: "Completed 10th Grade 📜",
        subText: "Scored 59% in 10th Grade passed, learned, and moved on."
      },
      {
        text: "Wanted to take up Commerce 🌪❤️",
        subText: "Wanted to take the Commerce stream because I was scared of Maths, but to chase my dream, I had to opt for Maths."
      }


    ],
  },
  {
    year: 2012,
    achievements: [
      {
        text: "First Computer 💻",
        subText: "I played GTA San Andreas all day, everyday."
      },
    ],
  },
  {
    year: 2002,
    achievements: [
      {
        text: "Moved to Balrampur Uttar Pradesh.",
        subText: "We moverd to Balrampur from our Hometown"
      },
    ],
  },
  {
    year: 2001,
    achievements: [
      {
        text: "An Engineer was Born in India",
      },
    ],
  },
];


export default function About() {
  return (
    <>
      <Container className="min-h-screen pt-20">
        <Heading className="">
          About Me
        </Heading>
        <div className="mx-6 my-4">
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <Image className="size-40 md:size-55 rounded-lg shadow-[0px_0px_3px_1px_var(--color-secondary)]" src="/assets/avatar.JPG" alt="Profile Image" width={500} height={500} />

            <div className="mt-4">
              <Heading as="h3" className="text-2xl font-bold md:p-0 p-0 tracking-wide">Saif Ali Khan</Heading>
              <p className="text-secondary mt-4">I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.</p>
              <p className="text-secondary mt-8 font-bold">Skills</p>
              <div className="flex flex-wrap gap-2">
                {mySkills.map((skills) => (
                  <Tooltip key={skills.key} content={skills.key!!}>{skills}</Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary/40 mask-l-from-90% mask-r-from-90% my-10 h-px  inset-0" />
        <section id="timeline" className="ml-6 mr-3 pb-10 ">

          <Timeline data={data} />
        </section>
      </Container>
    </>
  );
}