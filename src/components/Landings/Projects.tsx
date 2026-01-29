import { ProjectsList } from "../Projects/ProjectsList";
export default function Projects() {

  return (
    <section
      id="/projects"
      className="shadow-sectionInset dark:shadow-sectionInset-dark my-4 px-3 py-4 md:px-10"
    >
      <p className="text-muted-forground py-2 text-sm">
        Here are some of my projects that I have worked on.
      </p>

      <ProjectsList  />
      {/* {projects.map((el, indx) => (   
          <Link
            href={`/projects/${el.slug}`}
            key={indx}
            onMouseEnter={() => setHovered(indx)}
            className="relative z-20 block cursor-pointer rounded-2xl p-1 transition-all duration-200 ease-in-out active:scale-98"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: -40 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: indx * 0.1,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="shadow-custom h-60 w-full rounded-xl object-cover object-top transition-all duration-300"
                  width={300}
                  height={300}
                  src={el.url}
                  alt={el.title}
                />
                <h2 className="text-forground mt-2 text-lg font-semibold tracking-tight md:text-xl">
                  {el.title}
                </h2>
                <p className="text-muted-forground my-1 text-sm">
                  {truncate(el.description, 250)}
                </p>
              </motion.div>
              <div>
                <SubHeading className="md:p-0">Technologies Used</SubHeading>
                <div className="relative z-30 flex flex-row gap-1">
                  {el.techUsed.map((tech, techIndex) => {
                    const icon = getIcons(tech);

                    return (
                      <Tooltip key={`${indx}-${techIndex}`} content={tech}>
                      <button className="hover:scale-120 size-6 mx-px  transition-all duration-300 ease-in-out ">
                        {icon}
                      </button>
                    </Tooltip>
              
                   
                    );
                  })}
                </div>
              </div>
              {hovered === indx && (
                <motion.div
                  layoutId="hovered"
                  className="bg-secondary/10 shadow-custom-inset-shadow dark:shadow-custom-inset-shadow-dark absolute -inset-2 h-120 w-102 rounded-2xl"
                />
              )}
            </div>
          </Link>
        ))} */}
    </section>
  );
}
