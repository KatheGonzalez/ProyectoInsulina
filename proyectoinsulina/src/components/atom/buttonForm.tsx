import { FC, ReactNode } from 'react';
import {  ButtonStyle  } from "../../assets/styles/buttons.Style";

export const ButtonForm: FC<{onClick: () => void, children: ReactNode}> = (props) => {
    return (
        <>
            <ButtonStyle onClick={props.onClick}>
                {props.children}
            </ButtonStyle>
        </>
    )
}
