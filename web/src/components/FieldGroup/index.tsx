import { InputHTMLAttributes } from "react";

interface FieldGroupProps extends InputHTMLAttributes<HTMLDivElement>{ 
    children?:
    | React.ReactNode
    | React.ReactNode[];
    gap?: string | number
    flex1?: boolean
}
export const FieldGroup = ({children,gap, flex1,...rest}:FieldGroupProps)=>{
    return (
        <div {...rest} className={`grid grid-cols-2 gap-${gap??'2'} ${flex1? 'flex-1':''}`}>
            {children}
        </div>
    )
}