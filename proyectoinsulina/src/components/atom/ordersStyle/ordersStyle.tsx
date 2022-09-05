import styled from 'styled-components'; 

export const TituloUser = styled.th`
    width: 86px;
    height: 34px;
    font-size: 28px;
    color: var(--grey-normal);
    padding: 0 25px;

    &.OrdersForm{
        font-size: 15px;
        border-bottom: 1px solid var(--grey-normal) ;
    }

    &.UserName{
        font-size: 15px;
    }

    &.count {
        color: var(--grey-dark);
        justify-content: start;
    }

    &.brand{
        color: var(--grey-dark);
    }
`;
