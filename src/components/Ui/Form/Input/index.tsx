import { CSS } from "@stitches/react/types/css-util"
import { InputHTMLAttributes, ReactNode } from "react"
import { InputContainer } from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode
    css?: CSS
}

export const Input = ({ icon, css, ...props}: InputProps) => {
    return (
        <InputContainer css={css}>
            <input type="text" {...props} />
            {icon}
        </InputContainer>
    )
}