import styled from 'styled-components';

export const Parentabout = styled.div `
    margin: 15% 0 8%;
    padding: 30px 0;
    background-color: #05457008;
`
export const AboutH2 = styled.h2 `
    text-align: center;
    font-size: 45px;
    color: var(--subColor);
    font-weight: bold;
`
export const AboutBox = styled.div `
    margin-top: 10em;
    position: relative;
`
export const AboutboxAbsolute = styled.div `
    margin: 0;
    width: 230px;
    position: absolute;
    z-index: -1;
    opacity: .3;
    top: -115px;
    left: -39px;
`
export const AboutboxBefore = styled.div `
    margin: 0;
    width: 230px;
    position: absolute;
    z-index: -1;
    opacity: .3;
    bottom: -70px;
    right: -39px;
    transform: rotate(180deg);
`
export const AboutboxH3 = styled.h3 `
    color: var(--subColor);
    font-size: 43px;
    margin-bottom: 20px;
`
export const AboutboxP = styled.p `
    color: #777;
`
export const AboutboxA = styled.a `
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 10px 20px;
    margin: 10px 0;
    display: inline-block;
    font-size: 14px;
    padding-top: 11px;
    color: var(--mainColor) !important;
`
// .about .box a svg{
//     background-color: var(--subColor);
//     height: 25px;
//     width: 25px;
//     border-radius: 30px;
//     color: #fff;
// }
export const AboutImg = styled.img `
    margin-top: 10%;
`