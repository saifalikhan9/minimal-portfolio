import Image from 'next/image'
import React from 'react'
import { Heading } from '../ui/Heading'
import { Link } from 'next-view-transitions'
import { Button } from '../ui/Button'
import { IconFileText, IconSend } from '@tabler/icons-react'
import Motion from '../ui/icons/Motion'
import PostgreSQL from '../ui/icons/PostgreSQL'
import ReactIcon from '../ui/icons/ReactIcon'
import NextJs from '../ui/icons/NextJs'
import TypeScript from '../ui/icons/TypeScript'
import { cn } from '@/src/lib/utils'
import { heroConfig, skillComponents } from '@/src/config/Hero'
import { parseTemplate } from '@/src/lib/hero'
import Skill from '../common/Skill'

export const Hero = () => {

    const { name, title, avatar, skills, description, buttons } = heroConfig;

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
              <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
                <SkillComponent />
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
            <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 px-4 md:px-10 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
          {renderDescription()}
        </div>

            <div className="mx-4 md:mx-10 my-4 inline-flex items-center gap-5">
                <Link
                    href={
                        "https://drive.google.com/file/d/1yditvS4vokyLE_DXAg-Fq_Zj8uL0l1-V/view?usp=drive_link"
                    }
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


const ProfileDes = () => {
    return (
        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2  px-4 md:px-10 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
            <span className="whitespace-pre-wrap">
                I build interactive web apps using
            </span>
            <IconsText

                iconSvg={<TypeScript />}
                label="TypeScript"
            />

            <span className="whitespace-pre-wrap">, </span>
            <IconsText label="React" iconSvg={<ReactIcon />} />
            <span className="whitespace-pre-wrap">, </span>
            <IconsText label="Nextjs" iconSvg={<NextJs />} />
            <span className="whitespace-pre-wrap">, </span>
            <IconsText label="React" iconSvg={<ReactIcon />} />
            <span className="whitespace-pre-wrap"> and </span>
            <IconsText

                label="PoestgreSQL"
                iconSvg={<PostgreSQL />}
            />
            <span className="whitespace-pre-wrap">. With a focus on </span>
            <b className="text-forground whitespace-pre-wrap">UI</b>
            <span className="whitespace-pre-wrap">design. Enthusiastic about</span>
            <IconsText
                iconClassName="size-5"
                label="Motion"
                iconSvg={<Motion />}

            />
            <span className="whitespace-pre-wrap">
                , driven by a keen eye for design.
            </span>
        </div>
    );
};


type IconsTextProps = {
    className?: string;
    iconClassName?: string;
    iconSvg: React.ReactNode;
    label: string;
};

const IconsText: React.FC<IconsTextProps> = ({
    className = "",
    iconSvg,
    iconClassName,
    label,
}) => (
    <span


        className={`inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black shadow-[1px_-1px_12px_var(--color-neutral-300)_inset] dark:border-white/30 dark:bg-white/15 dark:text-white dark:shadow-[1px_1px_10px_var(--color-neutral-700)_inset] ${className}`}

    >
        <div className={cn("size-4 shrink-0", iconClassName)}>{iconSvg}</div>
        <p className="ml-1 text-sm font-bold">{label}</p>
    </span>
);  