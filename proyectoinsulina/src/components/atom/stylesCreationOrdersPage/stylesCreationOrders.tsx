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
    width: 920px;
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
    width: 1000px;
    height: 800px;
    justify-items: center;

    &.OrdersContainer{
        padding-left: 140px;
    }
`;

export const Leash = styled.p`
    display: inline;
    width: 350px;
    height: 80px;
    padding-left: 50px;
    background: var(--purple-darker);
    color: var(--white-normal);
    font-size: 18px;
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
    color: var(--grey-middle);

    &.titlegrey{
        color: var(--grey-normal) ;
    }
`;

export const InfoInsulines = styled.div`
    display: inline;
`;