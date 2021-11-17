import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Center = styled.div`
  margin: auto;

  .containerInitial {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .one {
    width: 620px;
    height: 481px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .items {
    color: ${colors.green};
    line-height: 64px;
  }

  .p2 {
    color: black;
    font-size: 1.5rem;
    margin: 0.5rem auto;
    font-family: 'Bold';
  }
  .p1 {
    margin: 0.2rem 0;
    font-size: 3.7rem;
  }
  .items span {
    font-size: 5rem;
    color: black;
    font-family: 'Bold';
    font-weight: bold;
  }

  .items button {
    border-radius: 10px;
    width: 300px;
    height: 64px;
    color: white;
    font-size: 2rem;
    scroll-behavior: smooth;
    background: ${colors.green};
    font-style: normal;
    font-weight: bold;
  }

  .two {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 443px;
    height: 80%;
    text-align: center;
    margin-right: 50px;
    margin-top: 180px;
    object-fit: cover;
  }

  .svgs {
    position: absolute;
    right: -2px;
    top: -35px;
    z-index: -1;
  }

  @media (max-width: 1050px) {
    .containerInitial {
      display: flex;
      flex-direction: column-reverse;
      border: 1px solid red;
    }

    img {
      width: 60%;
      height: 65%;
      margin: 5rem auto;
    }

    .p1 {
      font-size: 2.5rem;
    }
    .p2 {
      font-size: 1rem;
    }
  }
`;
export const Lists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
