import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: green;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
    position: fixed;
    right: 20px;
    bottom: 40px;
    font-size: 32px;
    z-index: 1;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: var(--subColor);
    text-align: center;
    color: #fff;
    border-radius: 25px;
`
