
import styled from 'styled-components'; 

export const Card = styled.div`
    background: -webkit-linear-gradient(-250deg, 
            rgba(29, 133, 208,0.90)
            0%, rgba(106, 15, 188, 1) 
            90%, rgba(143, 0, 185,1) 100%);
    position: relative;
    width: 538px;
    height: 246px;
    padding: 0 40px;
    margin-top: 70px;
    border-radius: 12px;
    cursor: pointer;
`;

export const TitleCard = styled.h1`
    font-size: 50px;
    font-weight: bold;
    color: var(--white-normal);
`; 

export const TextCard = styled.p`
    color: var(--white-normal);
    font-size: 24px;
    width: 386px;
`
export const ImgCard = styled.img<{rotate:number}>`
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 17px;
    right: -29px;
    ${props => props.rotate && `
        transform: rotate(${props.rotate}deg)
    `};
`



