import { ReactNode } from "react";

export interface TypographyProps {
    children: ReactNode
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' |'p'
    weight?: string
    color?: string
    display?: string
}