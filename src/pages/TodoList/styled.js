import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  max-height: 1000px;
  margin: 3rem auto;
  overflow-y: auto;

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

  .middle {
    width: 100%;
    height: 420px;
    margin: 3rem 0;
    background: black;
    z-index: -100;
    overflow-y: none;
    transform: skewY(-3deg);

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .texts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: skewY(3deg);
    font-style: normal;
    font-weight: bold;
  }

  .texts h3 {
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    border-bottom: 4px solid ${colors.green};
    display: block;
    margin-bottom: 41px;
  }
  .items p {
    text-align: left;
    font-size: 1.5rem;
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.5rem;
    margin: 2rem auto;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .erase-all {
    width: 300px;
    height: 64px;
    border-radius: 10px;
    background: #000;
    color: white;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    margin: 2.3rem 0;
  }

  .todo,
  .done {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    font-style: normal;
    font-weight: bold;

    width: 380px;
    border-radius: 4px;
    box-shadow: 0px 0px 12px black;
    margin: 2rem;
  }

  .todo {
    border-top: 20px solid #e88d39;

    .list {
      display: flex;
      align-items: left;
      width: 100%;
      margin-top: 2rem;
    }

    input[name='add'] {
      margin-left: 1rem;
      border: none;
      outline: none;
      font-weight: bolder;
      width: 100%;
      font-family: arial;
    }

    .iconCheck {
      cursor: pointer;
      color: white;
      border: 2px solid #a2a2a2;
      background: greenyellow;
      border-radius: 50%;
      outline: none;
    }

    .items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0.5rem;
      overflow-x: auto;
      text-transform: capitalize;
    }

    .items div {
      display: flex;
      align-items: center;
    }
    .icons-Items {
      color: #e88d39;
    }
    .items span {
      margin-left: 1rem;
    }

    .btns {
      display: flex;
    }

    .btns button {
      background: white;
      outline: none;
      border: none;
      font-size: 0.7rem;
      font-weight: 700;
      margin: 0 0.3rem;
    }
  }

  .done {
    border-top: 20px solid #4ac959;

    strong {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
