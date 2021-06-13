import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: inherit;
      color: inherit;
      font-family: 'Source Sans Pro', sans-serif;
   }

   body {
      min-height: 100vh;
      max-width :100vw;
   }
`

export const Container = styled.div`
   z-index: 1;
   margin: 0 auto;
   width: 100%;
   max-width: 1300px;
   padding: 0 50px;

   @media screen and (max-width: 991px) {
      padding: 0 30px;
   }
`

export const Button = styled.button`
   border-radius: 4px;
   background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
   white-space: nowrap;
   padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
   color: '#fff';
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   cursor: pointer;

   &:hover {
      transition: all 0.3s ease-out;
      background: '#fff';
      background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
   }

   @media screen and (max-width: 960px) {
      width: 100%;
   }
`

export default GlobalStyles
