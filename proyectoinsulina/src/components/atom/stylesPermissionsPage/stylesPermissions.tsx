import styled from 'styled-components'; 

export const BoxPermissions = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 5fr;
    background-color: var(--white-normal);
    overflow: hidden;

    &.InfoNewOrder{
    grid-template-columns: 2fr 3fr;
    }

    &.OrderContainer{
    grid-template-columns: 1fr 4fr;
    }
`;

export const ImgToDo = styled.img`
    position: absolute;
    width: 270px;
    height: 370px;
    top: 570px;
    left: 80px;
    transform: rotate(360deg);
    z-index: 2;
`;

export const ImgBack = styled.img`
    position: absolute;
    width: 450px;
    height: 150px;
    top: 90%;
    transform: rotate(360deg);
`

// NAV BAR 

export const NavBarPermissions = styled.nav`
   grid-column-start: 1;
   grid-column-end: 3;
   width: 100%;
   height: 100px;  
`
export const ImgLogoNav = styled.img`
    padding-left: 70px;
    padding-top: 20px;
`

export const MenuBar = styled.div`
    display: inline-block;
    padding-left: 65%;
`

export const Linksnavbar = styled.a`
    display: inline;
    padding: 20px;
    cursor: pointer;

    &.HomeColor{
        color: var(--purple-dark);
    }

    &.GreyColor{
        color: var(--grey-normal);
    }
`

// Parte Left  

export const InfoUserSection = styled.div`
    display: grid;
    width: 480px;
    height: 300px;
    justify-items: center;
`;

export const InfoUserCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 320px;
    height: 146px;
    border-radius: 12px;
    box-shadow: 1px 2px 6px 2px var(--grey-normal);
`;

export const NameUser = styled.p`
    color: var(--grey-dark);
    grid-column: 1;
    padding: 20px;
    padding-top: 15px;
`;

export const UserImageIcon = styled.img`
    padding-top: 60px;
    padding-left: 60px;
`; 

export const Connection = styled.div`
    width: 300px;
    height: 80px;   
`;

export const LastConnection = styled.p`
    color: var(--grey-normal);
`
export const BoldTitle = styled.span`
    color: var(--grey-dark);
`

// Right Part 

export const PermissionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 600px;
    border-left: 2px solid var(--grey-normal);
    padding-left: 30px;
`;



