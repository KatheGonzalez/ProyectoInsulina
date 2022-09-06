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
  };

  &.botonDelete{
    width: 30px;
    color: var(--purple-light);
    background-color: var(--white-normal);
    padding-left: 50px;
  };

  &.botonEditar{
    width: 30px;
    color: var(--blue-dark);
    background-color: var(--white-normal);
    padding-left: 50px;
  };

  &.botonGuardar{
    width: 30px;
    color: var(--purple-light);
    background-color: var(--white-normal);
  };

  &.botoninsulines{
    width: 350px;
    height: 70px;
    font-size: 30px;
    justify-self: center;
  }
`;






