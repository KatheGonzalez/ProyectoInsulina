import styled from 'styled-components';

export const BackgroundSuccess = styled.div`
    width: 100%;
    height: 100vh;
    color: var(--transparent-black16);
`;

// Esto no se usa no deberia existir

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



