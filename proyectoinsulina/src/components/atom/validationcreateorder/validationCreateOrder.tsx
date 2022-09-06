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

export const StatusComponent = styled.div<{background:string}>`
    display: flex;
    width: 160px;
    height: 40px;
    color: var(--white-normal);
    border-radius: 35px;
    align-items: center; 
    justify-content: center;
    ${props => props.background && `
        background-color: ${props.background}
    `};
`; 

export const BrandComponent = styled.div`
    display: flex;
    width: 160px;
    height: 40px;
    color: var(--white-normal);
    border-radius: 35px;
    align-items: center; 
    justify-content: center;
`;
