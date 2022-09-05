
import styled from 'styled-components'; 

export const Card = styled.div`
    background: -webkit-linear-gradient(-250deg, 
            rgba(29, 133, 208,0.90)
            0%, rgba(106, 15, 188, 1) 
            90%, rgba(143, 0, 185,1) 100%);
    position: relative;
    width: 500px;
    height: 230px;
    padding: 0 30px;
    border-radius: 12px;
    cursor: pointer;
`;

export const TitleCard = styled.h1`
    font-size: 45px;
    font-weight: bold;
    padding-top: 10px;
    color: var(--white-normal);
`; 

export const TextCard = styled.p`
    color: var(--white-normal);
    font-size: 25px;
    width: 386px;
    padding-top: 5px;
`;

export const ImgCard = styled.img<{rotate:number, left?:string, right?:string, top?:string, bottom?:string}>`
    width: 150px;
    height: 150px;
    position: absolute;
    ${props => props.rotate && `
        transform: rotate(${props.rotate}deg)
    `};

    ${props => props.left && `
        left: ${props.left}
    `};

    ${props => props.top && `
        top: ${props.top}
    `};

    ${props => props.right && `
        right: ${props.right}
    `};

    ${props => props.bottom && `
        bottom: ${props.bottom}
    `};
`;
