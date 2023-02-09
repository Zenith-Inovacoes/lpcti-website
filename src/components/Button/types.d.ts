import { ReactNode } from "react"

export interface ButtonProps {
    children: ReactNode
    variant: "rounded" | "text"
    open: boolean
    setOpen: Function
    text?: string
    setText: function
    index: number
}