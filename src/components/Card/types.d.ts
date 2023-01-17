import { ReactNode } from "react"

export interface CardRootProps {
    children: ReactNode
    variant: 'primary' | 'secondary'
}

export interface CardHeaderProps {
    children: ReactNode
}

export interface CardBodyProps {
    children: ReactNode
}