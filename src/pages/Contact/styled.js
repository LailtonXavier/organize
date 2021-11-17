import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem auto;
  position: relative;

  .item1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    width: 491.85px;
    height: 330.36px;
  }

  img {
    border-radius: 50%;
    width: 180px;
    height: 180px;
    margin-bottom: 3rem;
    object-fit: cover;
  }
  .box {
    position: absolute;
    left: 80px;
    top: 135px;
    width: 166px;
    height: 23px;
    background-color: #46bd62;
    z-index: -1;
  }

  .item2 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 721px;
    padding: 80px;
    margin: auto;
    position: relative;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 2rem;
    position: absolute;
    top: -80px;
    left: 60px;
  }

  .titleIcons {
    width: 80px;
    height: 80px;
    padding: 1rem;
    background: #46bd62;
    color: white;
    margin-right: 1.5rem;
  }
  .title strong {
    display: inline;
    font-family: 'Bold';
  }

  form {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 25px 0;
    margin-top: -22px;
    width: 100%;
  }

  form p {
    font-size: 1rem;
    color: black;
    font-weight: 400;
  }
  .items1,
  .items4,
  .btn {
    grid-column: 1 / 3;
  }

  textarea {
    width: 100%;
    height: 150px;
    margin-top: 0.4rem;
    padding: 1rem;
    border-radius: 4px;
  }
  input {
    margin-top: 0.4rem;
    border: 1px solid #06152b;
    border-radius: 4px;
    padding-left: 1rem;
    background-color: white;
  }
  input[name='texts'] {
    width: 100%;
    height: 50px;
  }
  input[name='emails'] {
    width: 98%;
    height: 50px;
  }
  input[name='phone'] {
    width: 98%;
    height: 50px;
  }

  .btn {
    height: 52px;
    background: #46bd62;
    color: white;
    border-radius: 4px;
    font-family: 'Bold';
    letter-spacing: 2px;
    font-style: normal;
    font-weight: bold;
  }

  @media (max-width: 700px) {
    .item2 {
      width: 460px;
    }

    .items3,
    .items2 {
      grid-column: 1 / 3;
    }
  }
`;
