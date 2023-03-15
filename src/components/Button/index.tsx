interface ButtonProps {
    type: "button" | "submit" | "reset" 
    value: string
}

export const Button = ({type, value}: ButtonProps) => {
    return(
        <>
            <button type={type}>{value}</button>
        </>
    )
}