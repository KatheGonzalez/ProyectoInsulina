
import { FC } from 'react';
import {  InputStyle  } from './input.Style';
import { InputFormData } from './inputFormData';

export const InputForm: FC<InputFormData> = (props) => {
    return (
            <InputStyle
                type={props.type}
                onChange={props.onChange}
                value = {props.value}
                placeholder = {props.placeholder}
                name = {props.name}
                autoComplete = {props.autocomplete}
            ></InputStyle>     
    )
}
