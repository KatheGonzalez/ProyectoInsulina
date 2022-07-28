
import { FC, ReactNode } from "react";
import {  LabelStyle } from "../../assets/styles/label.Style";

export const LabelForm: FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <LabelStyle>{children}</LabelStyle>
        </>
        
    )
}




 