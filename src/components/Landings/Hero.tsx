import Image from 'next/image'
import { Heading } from '../ui/Heading'
import { Link } from 'next-view-transitions'
import { Button } from '../ui/Button'
import { IconFileText, IconSend } from '@tabler/icons-react'

import { heroConfig, skillComponents } from '@/src/config/Hero'
import { parseTemplate } from '@/src/lib/hero'
import Skill from '../common/Skill'

const FALLBACK_RESUME_URL =
  "https://drive.google.com/file/d/1yditvS4vokyLE_DXAg-Fq_Zj8uL0l1-V/view?usp=drive_link";

export const Hero = ({ resumeUrl }: { resumeUrl?: string }) => {

    const { name, title, avatar, skills, description } = heroConfig;
    const resumeHref = resumeUrl || FALLBACK_RESUME_URL;

    const renderDescription = () => {
        const parts = parseTemplate(description.template, skills);
    
        return parts.map((part) => {
          if (part.type === 'skill' && 'skill' in part && part.skill) {
            const SkillComponent =
              skillComponents[part.skill.component as keyof typeof skillComponents];
            if (!SkillComponent) {
              console.warn(`Skill component "${part.skill.component}" not found in skillComponents`);
              return null;
            }
            return (
              <Skill  key={part.key} name={part.skill.name} href={part.skill.href}>
                <SkillComponent className='' />
              </Skill>
            );
          } else if (part.type === 'bold' && 'text' in part) {
            return (
              <b key={part.key} className="text-primary whitespace-pre-wrap">
                {part.text}
              </b>
            );
          } else if (part.type === 'text' && 'text' in part) {
            return (
              <span key={part.key} className="whitespace-pre-wrap">
                {part.text}
              </span>
            );
          }
          return null;
        });
      };
    return (
        <div>
            <div className="bg-forground/10 mx-3 md:mx-10 my-4 size-24 overflow-clip rounded-xl p-1 ">
                <Image
                    className="rounded-[12px]"
                    src={avatar}
                    alt="picture "
                    width={100}
                    height={100}
                />
            </div>
            <Heading className="tracking-wide">
            Hi, I&apos;m {name} — <span className="text-secondary">{title}</span>
            </Heading>
            <div className="mt-4 px-4 md:px-10 text-base whitespace-pre-wrap  leading-loose text-secondary md:text-lg ">
              {renderDescription()}
            </div>

            <div className="mx-4 md:mx-10 my-4 inline-flex items-center gap-5">
                <Link
                    href={resumeHref}
                >
                    <Button variant="secondary" className="gap-1" asChild>
                        <span>
                            {
                                <IconFileText className="size-4 rotate-z-20 stroke-1 perspective-distant transform-3d" />
                            }
                        </span>
                        Resume / CV
                    </Button>
                </Link>
                <Link href={"/contact"}>
                    <Button className="gap-1">
                        <span>
                            {<IconSend className="relative top-px size-4 stroke-1" />}
                        </span>{" "}
                        Get In Touch
                    </Button>
                </Link>
            </div>
        </div>
    )
}




