import styled from 'styled-components'; 

export const InputStyle = styled.input`
    background-color: var(--white-normal);
    border: 1px solid var(--grey-normal);
    border-radius: 6px;
    width: 300px;
    height: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    margin-bottom: 30px;
    color: var(--purple-dark);
    align-self: center;
    justify-self: center;
    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
    border: 2px solid var(--purple-dark)}
`