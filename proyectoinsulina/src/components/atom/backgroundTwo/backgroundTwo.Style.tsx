import styled from 'styled-components'; 

export const BackgroundTwo = styled.div.attrs({
    className: 'backgroundTwo'
})`
    display: grid;
    width: 900px;
    height: 500px;
    grid-template-columns: 400px 500px;
    grid-template-rows: auto;
    margin: auto;
    margin-top: 100px;
    background-color: var(--white-normal);
    border-radius: 5px;
    box-shadow: 0px 10px 20px var(--transparent-black16);
`
