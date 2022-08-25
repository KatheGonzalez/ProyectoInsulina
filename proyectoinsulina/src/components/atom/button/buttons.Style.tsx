import styled from 'styled-components'; 

export const ButtonStyle = styled.button`
    background-color: var(--purple-dark);
    width: 200px;
    height: 35px;
    margin-top: 10px;
    border-radius: 20px;
    border: none;
    color: var(--white-normal);
    cursor: pointer; 
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    &:hover,
    &:focus {
    background-color: var(--purple-darker);
  }
`
