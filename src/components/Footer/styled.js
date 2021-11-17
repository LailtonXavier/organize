import styled from 'styled-components';

export const Cente = styled.div`
  display: flex;
  background: black;
  color: white;
  justify-content: center;
  height: 246px;
  font-size: 1rem;
  width: 100%;
  margin-top: 4rem;
  position: relative;

  div {
    transform: skewY(-3deg);
    background: black;
    height: 246px;
    width: 100%;
    position: absolute;
    top: -40px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    transform: skewY(3deg);
  }
  p {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

    font-size: 1.5rem;
    margin: 0.5rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
  }

  p:nth-child(3n) {
    font-size: 0.9rem;
  }
`;
