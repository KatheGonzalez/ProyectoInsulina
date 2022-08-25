import styled from 'styled-components'; 

export const InputStyle = styled.input`
    background-color: var(--white-normal);
    border: 1px solid var(--grey-normal);
    border-radius: 6px;
    width: 300px;
    height: 20px;
    font-family: 'Roboto', sans-serif;
    &:hover,
    &:focus {
    border: 1px solid var(--purple-dark)}
`