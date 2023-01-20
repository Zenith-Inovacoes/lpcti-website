import { ReactNode } from "react";

export interface LinkProps {
    children: ReactNode
    variant: "normal" | "underline"
    color?: string
    href: string
}