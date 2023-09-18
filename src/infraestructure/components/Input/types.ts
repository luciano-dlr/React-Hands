import { Dispatch, SetStateAction } from "react";

export type InputProps = {
    label: string;
    variant: "filled" | "outlined" | "standard";
    placeholder?: string;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    inputState:string;
    setInputState:Dispatch<SetStateAction<string>> 
    
}


