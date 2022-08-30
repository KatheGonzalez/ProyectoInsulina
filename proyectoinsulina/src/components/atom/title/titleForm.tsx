import { FC } from 'react';
import {  TitleStyle } from './title.Style';
import { TitleFormData } from './titleFormData';

export const TitleForm: FC<TitleFormData> = (props) => {
    return (
        <TitleStyle
            className={props.className}>
            { props.children }
        </TitleStyle>   
    )
}
