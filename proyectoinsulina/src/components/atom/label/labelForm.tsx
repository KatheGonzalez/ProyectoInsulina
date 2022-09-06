
import { FC } from 'react';
import {  LabelStyle } from './label.Style';
import { LabelFormData } from './labelFormData';

export const LabelForm: FC<LabelFormData> = ({children}) => {
    return (
        <LabelStyle>{children}</LabelStyle>
    )
};




 