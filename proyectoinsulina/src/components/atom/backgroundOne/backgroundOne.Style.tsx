import styled from 'styled-components'; 

export const BackgroundOne = styled.div.attrs({
    className: 'backgroundOne'
})`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-image: url('/src/assets/images/brand/brand-secondary-color.svg');
    background-color: var(--white-normal);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
