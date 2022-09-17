import { InputHTMLAttributes } from "react";

interface FieldProps extends InputHTMLAttributes<HTMLDivElement>{
    children?:
    | React.ReactNode
    | React.ReactNode[];
    gap?: number | string
    flex1?: boolean
}
export const Field = ({children,gap, flex1, ...rest}:FieldProps)=>{
    return (
        <div {...rest} className={`flex flex-col gap-${gap ?? '2'} ${flex1? 'flex-1':''}`}>
            {children}
        </div>
    )
}