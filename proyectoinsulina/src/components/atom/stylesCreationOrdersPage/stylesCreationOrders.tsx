import styled from 'styled-components'; 

// background 

export const ImgToDoCreationPage = styled.img`
    position: fixed;
    width: 400px;
    height: 450px;
    top: 600px;
    left: 10px;
    transform: rotate(360deg);
    z-index: 2;

    &.inyecciones{
        top: 530px;
        left: -10px;
    };
`;


// column informative

export const ColumnInformative = styled.div`
    width: 30%;
    height: 717px;

    &.InformativeGetOrder{
        width: 400px;
        height: 700px;
    };
`;

export const InfoContainer = styled.div`
    padding-left: 70px;
    width: 615px;

    &.InfoGetOrder{
        width: 350px;
    };
`;

export const TitleInformation = styled.h1`
    color: var(--blue-dark);
    font-size: 32px;
    padding-bottom: 20px;
`;

export const ParrafoInformativo = styled.p`
    color: var(--grey-normal);
    font-size: 24px
`;

// Columna Derecha con formulario  - contenedores

export const ColumnCreativeForm = styled.div`
    width: 70%;
    height: 800px;
    padding-left: 120px;

    &.OrdersContainer{
        padding-left: 140px;
    }
`;


export const CreativeFormContainer = styled.div`
    position: relative;
    width: 800px;
    height: 650px;
    padding: 30px 20px;
    box-shadow: 0px 10px 20px var(--transparent-black30);
    border-radius: 12px;
    margin: 0;
    overflow: hidden;

    &.GetOrderContainer{
        width: 1200px;
        height: 700px;
        overflow: hidden;
    };
`;

// formulario 

export const TituloCreation = styled.h2`
    font-size: 24px;
    width: 500px;
    height: 30px;

    color: var(--grey-middle);

    &.titlegrey{
        color: var(--grey-normal) ;
    }
`;

export const InfoInsulines = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
`;

export const Leash = styled.h1`
    position: fixed;
    right: 146px;
    top: 140px;
    width: 150px;
    height: 50px;
    background: var(--purple-dark);
`;

export const InfoTag = styled.span`
    color: var(--white-normal);
    font-size: 18px;
    padding: 25px;

`;

export const Triangle = styled.div`
    position: fixed;
    right: 140.5px;
    top: 185px;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-top: 0;
    border-bottom: 50px solid var(--purple-darker);
    transform: rotate(90deg);
`;

export const Botonguardar = styled.div`
    padding: 0 250px;
`;

export const Separacion = styled.div`
    border-right: 2px solid var(--grey-normal);
`;

export const Separaciondos = styled.div`
    display: flex;
    padding-left: 10px;
`
