import styled from 'styled-components'

export const Sectionportfolio = styled.div `
    margin: 10% 0;
`
export const Titleh2 = styled.h2 `    
    text-align: center;
    font-size: 45px;
    color: var(--subColor);
    font-weight: bold;
    margin-bottom: 60px;
`
export const Boxportfoliobox = styled.div `
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    // filter: drop-shadow(2px 4px 6px #ccc);
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 20px;
    border-right: 3px solid var(--mainColor);
    border-right: ${props => props.active === 2 ? "3px solid var(--subColor)" : "3px solid var(--mainColor)"}
`
// export const Boxportfoliobox = styled.div::before `
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, .6);
// `

export const Imgportfolio = styled.img `
    width: 320px;
    margin: auto;
    display: block;
`

export const Portfolioboxtext = styled.div `
    // position: absolute;
    // top: 40px;
    text-align: center;
    padding: 20px;
`

export const Portfolioboxtexth3 = styled.h3 `
    color: var(--subColor);
    margin-bottom: 13px;
`

export const Portfolioboxtextp = styled.p `
    color: #666;
    font-size: 15px;
    line-height: 1.6;
`

export const Portfolioboxtexta = styled.a `
    background-color: var(--mainColor);
    width: 150px;
    display: block;
    margin: auto;
    height: 40px;
    color: #fff;
    color: ${props => props.buttonActive === 2 ? '#fff' : '#fff'};
    text-decoration: none;
    padding-top: 9px;
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px #888;
    cursor: pointer;
    background-color : ${props => props.buttonActive === 2 ? 'var(--subColor)' : 'var(--mainColor)'};
    transition: all .5s ease-in-out;
`

// export const Portfolioboxtextasvg = styed. `
//     background-color: var(--subColor);
//     width: 30px;
//     height: 30px;
//     padding: 5px;
//     border-radius: 25px;
//     margin-top: -3px;
//     margin-left: 10px;
// `