
import { FC } from 'react';
import {  LabelStyle } from './label.Style';
import { LabelFormData } from './labelFormData';

export const LabelForm: FC<LabelFormData> = (props) => {
    return (
        <LabelStyle
        className={props.className}>
            {props.children}
        </LabelStyle>
    )
};




 