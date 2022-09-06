import styled from 'styled-components'; 

export const InputStyle = styled.input<{width?: string, height?: string}>`
    border-radius: 12px;
    font-size: 18px;
    margin: 30px;
    color: var(--grey-normal);
    border: 1px solid var(--grey-normal);
    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
    border: 2px solid var(--purple-dark)}

    ${props => props.width && `
        width: ${props.width}
    `};

    ${props => props.height && `
        height: ${props.height}
    `};
    
    &.loginpassword{
        margin-bottom: 70px;
        padding-left: 10px;
    };

    &.loginuser{
        padding-left: 10px;
    };

    &.creationform{
        margin: 10px;
        padding-left: 10px;
    };

    &.editionForm{
        border-radius: 7px;
        color: var(--grey-normal);
        color: var(--grey-dark);
    };

    &.count{
        width: 78px;
        height: 30px;
    };

    &.brand{
        width: 108px;
        height: 30px;
    };
`;