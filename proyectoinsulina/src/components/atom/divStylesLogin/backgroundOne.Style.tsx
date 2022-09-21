import styled from 'styled-components';

// Esto es un template no un atomo**
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
  // al poner estilos con 0, no es necesario poner la medida
  box-shadow: 0 10px 20px var(--transparent-black16);
  overflow: hidden;
`;


//Informacion de la izquierda


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

export const DivContainer = styled.div`
   display: grid;
   grid-template-columns: 100px 639px;
   grid-template-rows: 400px;
`;

export const DivTitlePortal = styled.h1`
    padding-top: 250px;
    transform: rotate(90deg);
    font-size: 40px;
    color: var(--white-normal);
    width: 320px;
`;

export const DivPortalInfo = styled.div`
    display: flex;
    width: 400px;
    height: 300px;
    flex-flow:column;
    justify-content: center;
    align-items: center;
    margin: 50px auto
`;

export const ImgLogin = styled.img`
    width: 260px;
    height: 145px;
    margin-bottom: 50px;
`;

export const InfoLoginP = styled.p`
    width: 354px;
    height: 52px;
    font-size: 20px;
    color: var(--white-normal);
    text-align: center;
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


// parte de la derecha


export const LoginInfo = styled.div<{width:string, height:string}>`

   ${props => props.width && `
        width: ${props.width}
    `};

    ${props => props.height && `
        height: ${props.height}
    `};

    grid-column: 2;
    text-align: center;
    margin-top: 10px;
`;

export const HelpIcon = styled.span`
    width: 30px;
    height: 30px;
    color: var(--purple-dark);
    padding-left: 835px;
    padding-top: 5px;
`;

export const DivInfoLogin = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 600px;
  margin: auto;
`;

export const TitleLogin = styled.h1`
    font-size: 50px;
    margin-top: 50px;
    margin-bottom: 70px;
    color: var(--purple-dark);
`;

export const LinkLogin = styled.a`
    display: block;
    margin-top: 30px;
    font-size: 20px;
    color: var(--blue-dark);
    cursor: pointer;
`;













