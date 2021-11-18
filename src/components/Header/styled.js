import styled from 'styled-components';

export const Center = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 54px;

  a {
    margin: 0.5rem 0;
    color: white;
  }

  .logo {
    display: flex;
    flex-direction: row;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: black;
    color: white;
    height: 40px;
    width: 140px;
    border-radius: 4px;
  }
`;
