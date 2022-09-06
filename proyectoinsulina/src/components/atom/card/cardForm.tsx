import { FC } from 'react';
import { Card, ImgCard, TextCard, TitleCard } from './card.Style';
import { CardFormData } from './cardFormData';

export const CardForm: FC<CardFormData> = (props) => {
    return (
        <Card onClick={props.onClick}>
            <TitleCard>{props.title}</TitleCard>
            <TextCard>{props.text}</TextCard>
            <ImgCard src={props.img} alt='' rotate={props.rotate}
            left={props.left} right={props.right} top={props.top}
            bottom={props.bottom}/>
        </Card> 
)};
