import { FC, ReactNode } from 'react';
import {  TitleStyle } from './title.Style';

export const TitleForm: FC<{children: ReactNode}> = ({children}) => {
    return (
            <TitleStyle>
                { children }
            </TitleStyle>   
    )
}
