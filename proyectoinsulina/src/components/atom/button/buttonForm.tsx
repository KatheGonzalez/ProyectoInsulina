import { FC } from 'react';
import { ButtonFormData } from './buttonFormData';
import {  ButtonStyle  } from "./buttons.Style";

export const ButtonForm: FC<ButtonFormData> = (props) => {
    return (
        <ButtonStyle 
            onClick={props.onClick}>
            {props.children}
        </ButtonStyle> 
)
};
