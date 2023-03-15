interface InputProps {
    name: string,
    type: string,
    placeholder: string
}

export const Input = ({name, type, placeholder}: InputProps) => {
    return(
        <>
            <input name={name} type={type} placeholder={placeholder} />
        </>
    )
}