import React, {ReactNode} from 'react'

interface ButtonProps {
    type: "button" | "submit" | "reset" 
    value: string,
    children?: ReactNode
}

export const Button = ({type, value}: ButtonProps) => {
    return(
        <>
            <button type={type}>{value}</button>
        </>
    )
}