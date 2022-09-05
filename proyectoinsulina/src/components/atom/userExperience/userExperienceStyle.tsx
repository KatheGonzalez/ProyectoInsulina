import styled from 'styled-components'; 

export const BackgroundSuccess = styled.div`
    width: 100%;
    height: 100vh;
    color: var(--transparent-black16);
`;

export const ValidationCreateOrder = styled.div`
    display: block;
    width: 730px;
    height: 400px;
    justify-items: center;
`;

export const ValidationIcon = styled.img`
    width: 150px;
    height: 150px;
`;

export const ValidationParragraph = styled.p`
    width: 550px;
    height: 64px;
    color: var(--grey-normal);
`;


export const ConfirSuccess = styled.div`
    width: 891px;
    height: 40px;
    color: var(--green-normal);
    border-radius: 31px;
`;

export const ConfirFail = styled(ConfirSuccess)`
    color: var(--red-normal);
`;

export const InfoConfir = styled.p`
    width: 530px;
    height: 24px;
    color: var(--white-normal);
    font-size: 15px
`;

export const IconConfirmation = styled.img`
    width: 32px;
    height: 32px;
    color: var(--white-normal);
    padding-left: 5px;
    padding-right: 20px;
`;



