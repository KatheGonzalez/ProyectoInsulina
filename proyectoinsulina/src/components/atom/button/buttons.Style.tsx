import styled from 'styled-components'; 

export const ButtonStyle = styled.button`
    background-color: var(--purple-dark);
    width: 200px;
    height: 35px;
    margin-top: 30px;
    border-radius: 30px;
    border: none;
    color: var(--white-normal);
    cursor: pointer; 
    font-size: 13px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    &:hover,
    &:focus {
    background-color: var(--purple-darker);
  }

  &.botonlogin{
    width: 350px;
    height: 70px;
    font-size: 30px;
  }
`;




