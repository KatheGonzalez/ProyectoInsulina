import styled from 'styled-components'; 

export const BackgroundOne = styled.div`
    display: flex;
    width: 100%;
    height: 100vh
`;

export const BackgroundImage = styled.img<{top:string, left?:string, right?:string}>`
    position: fixed;
    z-index: -1;
    width: 70%;
    //left: ${({left})=> left};

    ${props => props.left && `
        left: ${props.left}
    `};
    ${props => props.top && `
        top: ${props.top}
    `};

    ${props => props.right && `
        right: ${props.right}
    `};
`;

export const Box = styled.div<{width:string, height:string}>`
    display: grid;

    ${props => props.width && `
        width: ${props.width}
    `};

    ${props => props.height && `
        height: ${props.height}
    `};

    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;
    margin: auto;
    background-color: var(--white-normal);
    border-radius: 10px;
    box-shadow: 0px 10px 20px var(--transparent-black16);
    overflow: auto;
`;

export const InfoPortal = styled.div`
   grid-column: 1;
   background: -webkit-linear-gradient(-250deg, 
            rgba(29, 133, 208,0.90)
            0%, rgba(106, 15, 188, 1) 
            90%, rgba(143, 0, 185,1) 100%);
`;

export const LoginInfo = styled.div`
   grid-column: 2;
   text-align: center;
   margin-top: 50px;

   &.size-backgrounfTwo{
    width: 600px;
   }
`;


export const DivContainer = styled.div.attrs({
    className: 'main-container-info-left'
})`
   display: grid;
   grid-template-columns: 1fr 5fr;
   grid-template-rows: 200px;
`;

export const DivPortalTitle = styled.div.attrs({
    className: 'title-portal'
})`
    color: var(--white-normal);
    font-size: 25px;
    transform: rotate(90);
`






