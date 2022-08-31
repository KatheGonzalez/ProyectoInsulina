import styled from 'styled-components'; 

export const BackgroundOne = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
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

    grid-template-columns: 2fr 4fr;
    grid-template-rows: auto;
    margin: auto;
    background-color: var(--white-normal);
    border-radius: 12px;
    box-shadow: 0px 10px 20px var(--transparent-black16);
    overflow: unset;
`;

export const InfoPortal = styled.div<{width:string, height:string}>`

    ${props => props.width && `
        width: ${props.width}
    `};

    ${props => props.height && `
        height: ${props.height}
    `};
    grid-column: 1;
    background: -webkit-linear-gradient(-250deg, 
                rgba(29, 133, 208,0.90)
                0%, rgba(106, 15, 188, 1) 
                90%, rgba(143, 0, 185,1) 100%);
`;

export const ImgPortal = styled.img<{rotate:number}>`
    width: 375px;
    height: 582px;
    position: absolute;
    left: 300px;
    top: 370px;
    ${props => props.rotate && `
        transform: rotate(${props.rotate}deg)
    `};
`

export const DivContainer = styled.div`
   display: grid;
   grid-template-columns: 100px 639px;
   grid-template-rows: 400px;
`;

export const DivPortalTitle = styled.div`
    grid-column: 1;
`

export const DivTitlePortal = styled.h1`
    transform: rotate(90deg);
    font-size: 40px;
    color: var(--white-normal);
`

export const DivPortalInfo = styled.div`
    grid-column: 2;
    display: flex;
    width: 400px;
    height: 300px;
    flex-flow:column;
    justify-content: center;
    align-items: center;
    margin: 50px auto
`

export const ImgLogin = styled.img`
    width: 260px;
    height: 145px;
    margin-bottom: 50px;
`
export const InfoLoginP = styled.p`
    width: 354px;
    height: 52px;
    font-size: 20px;
    color: var(--white-normal);
    text-align: center;
`
export const LoginInfo = styled.div<{width:string, height:string}>`

   ${props => props.width && `
        width: ${props.width}
    `};

    ${props => props.height && `
        height: ${props.height}
    `};

    grid-column: 2;
    text-align: center;
    margin-top: 50px;
`;

export const DivInfoLogin = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 600px;  
    margin: auto ;
`; 


