import { ReactNode } from "react";

export interface ProjectsInterface{
    title: ReactNode,
    description: ReactNode,
    imageUrl: string,
    link: string,
    technologies: string[],
    isInDevelopment: boolean
}