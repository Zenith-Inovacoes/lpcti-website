import { ReactNode } from "react"

export interface ButtonProps {
    children: ReactNode
    variant: "rounded" | "text"
    open: boolean
    setOpen: function
    text?: string
    setText: function
    index: number
}