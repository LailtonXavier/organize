import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: url('/mont/Montserrat-light.woff') format('woff'),
   url('/mont/Poppins-SemiBold.woff') format('woff2');
}
@font-face {
    font-family: 'Bold';
    src: url('/mont/Montserrat-Bold.woff') format('woff');
  }
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body, input, textarea, button {
    font: 700 1rem "Montserrat";
  }
  button {
    cursor: pointer;
  }


  a {
    text-decoration: none;
  }
  li {
    list-style: none;


  }
  html{
   background: ${colors.white}
  }


  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.success};
    color: white;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.error};
    color: white;
  }

  html {
     // Scroll
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  // color scroll
  ::-webkit-scrollbar-thumb {
    background: ${colors.white};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: auto;
`;
