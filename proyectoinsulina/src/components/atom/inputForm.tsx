
import { FC } from "react";
import {  InputStyle  } from "../../assets/styles/input.Style";

export const InputForm: FC<{value: string, onChange:(e:any) => any, placeholder: string, type: string}> = (props) => {
    return (
        <>
            <InputStyle
                type={props.type}
                onChange={props.onChange}
                value = {props.value}
                placeholder = {props.placeholder}
            ></InputStyle>
        </>
        
    )
}
