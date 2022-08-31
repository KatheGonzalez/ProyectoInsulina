import styled from 'styled-components'; 

export const InputStyle = styled.input`
    border: 1px solid var(--grey-normal);
    border-radius: 12px;
    width: 640px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin: 30px;
    color: var(--grey-normal);
    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
    border: 2px solid var(--purple-dark)}
    
    &.loginuser{
        width: 640px;
        height: 50px;
    }

    &.loginpassword{
        width: 640px;
        height: 50px;
        margin-bottom: 70px;
    }
`