"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";
import { TickIcon } from "./icons/tick-icon";

interface Achievement {
    text: string;
    subText?: string
}

interface TimelineYear {
    year: number;
    achievements: Achievement[];
}

interface TimelineProps {
    data: TimelineYear[];
    className?: string;
}

export const Timeline = ({ data, className }: TimelineProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={cn("w-full", className)}
        >
            <h2 className={cn("mb-8 bg-forground/10 p-1 w-fit relative  text-md font-bold text-forground  md:text-lg",

            )}>
                <span className="absolute -top-px -left-px size-1 rounded-full bg-secondary/50" />
                <span className="absolute -top-px -right-px size-1 rounded-full bg-secondary/50" />
                <span className="absolute -bottom-px -left-px size-1 rounded-full bg-secondary/50" />
                <span className="absolute -bottom-px -right-px size-1 rounded-full bg-secondary/50" />
                Timeline of Achievements
            </h2>
            <div className="space-y-8 px-4 md:px-10">
                {data.map((yearData, yearIndex) => (
                    <motion.div
                        key={yearData.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: yearIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h3 className="text-xl bg-secondary/10  shadow-[0px_3px_5px_-2px_var(--color-secondary)]   w-fit px-1 rounded font-semibold text-forground md:text-lg">
                            {yearData.year}
                        </h3>
                        <div className="space-y-3 pl-4">
                            {yearData.achievements.map((achievement, achievementIndex) => (
                                <motion.div
                                    key={achievementIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: yearIndex * 0.1 + achievementIndex * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start  gap-3"
                                >
                                    <TickIcon className="relative top-[5px] text-blue-600" />

                                    <div className="flex-1">

                                        <h3 className="font-medium text-forground">
                                            {achievement.text}
                                        </h3>
                                        {
                                            achievement.subText && <p className="text-muted-forground text-sm">{achievement.subText}</p>
                                        }

                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
