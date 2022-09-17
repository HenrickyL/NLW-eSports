import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import * as Dialog from '@radix-ui/react-dialog'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?:
    | React.ReactNode
    | React.ReactNode[];
    bg?: string;
    bgHover?: string;
    close?:boolean
}

export const Button = ({children,bg,bgHover, close, ...rest}:ButtonProps)=>{
    return(
        
        <button 
            {...rest}
            type='button'
            className={`flex flex-row justify-center items-center ${bg??'bg-zinc-500'} 
                px-5 h-12 rounded-md font-semibold gap-3 hover:${bgHover??'bg-zinc-600'}`}
        >
            {children}
        </button>
    )   
}