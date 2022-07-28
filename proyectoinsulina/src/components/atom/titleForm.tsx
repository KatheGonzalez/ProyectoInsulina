import { FC, ReactNode } from "react";
import {  TitleStyle } from "../../assets/styles/stylesComponents.style";

export const TitleForm: FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <TitleStyle>
                { children }
            </TitleStyle>
        </>
        
    )
}
