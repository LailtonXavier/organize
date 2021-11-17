import styled from 'styled-components';

export const CenterCars = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .back {
    position: absolute;
    background: #4ac959;
    height: 520px;
    width: 79%;
    border-radius: 10px;
    color: white;
  }
  .back p {
    font-size: 48px;
    margin: 3rem 3.5rem;
  }

  .card {
    margin-top: 10rem;
    margin-bottom: 34px;
    margin-left: 3rem;
    margin-right: 0.5rem;
    background: white;
    box-shadow: 0px 0px 20px #ccc;
    height: 430px;
    border-radius: 16px;
  }
  img {
    height: 283px;
    width: 360px;
    object-fit: fill;
  }

  @media (max-width: 800px) {
    img {
      margin: 0.2rem;
      height: auto;
      width: 150px;
    }
    .card {
      height: 400px;
    }
  }

  .icons {
    color: #4ac959;
    width: 4rem;
    height: 5rem;
    cursor: pointer;
  }

  .icons:hover {
    box-shadow: 0 0 10px white;
  }

  .desc {
    padding: 1rem;
    height: auto;
  }
  button {
    display: block;
    font-size: 1rem;
    border-radius: 26px;
    background: white;
    padding: 0.2rem 0.4rem;
    margin-bottom: 0.5rem;
    border-color: #9499b3;
  }

  span {
    word-break: break-all;
    width: 200px;
    height: 240px;
    padding: 1rem;
  }

  //:double-button
  .owl-carousel {
    position: relative;
  }
  .owl-nav {
    position: absolute;
    z-index: 1;
    top: 45%;
    width: 100%;
  }

  .owl-nav .owl-next {
    position: absolute;
    right: 0px;
    color: black;
    visibility: hidden;
  }

  .owl-nav .owl-next::after {
    visibility: visible;
    content: '>';
    color: #4ac959;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    font-size: 10rem;
    right: 25px;
    top: 0px;
  }

  .owl-prev {
    position: absolute;
    left: 0;
    color: black;
    visibility: hidden;
  }

  .owl-prev::after {
    visibility: visible;
    content: '<';
    color: #4ac959;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    font-size: 10rem;
    left: 70px;
    top: 0px;
  }

  .owl-dots {
    position: absolute;
    z-index: 1;
    bottom: -7%;
    left: 45%;
  }

  // carousel
  .owl-theme .owl-nav [class*='owl-'] {
    color: #fff;
    font-size: 14px;
    margin: 5px;
    padding: 4px 7px;
    background: #000;
    display: inline-block;
    cursor: pointer;
    border-radius: 3px;
  }
  .owl-theme .owl-nav [class*='owl-']:hover {
    background: #ccc;
    color: #9499b3;
    text-decoration: none;
  }

  .owl-theme .owl-dots .owl-dot span {
    border: 1px solid white;
  }
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #ccc;
    border: 1px solid #4ac959;
  }

  .owl-theme .owl-dots .owl-dot.active span {
    background: #4ac959;
  }

  @media (max-width: 600px) {
    .imgs {
      width: 15rem;
      height: 15rem;
    }
  }
  @media (max-width: 700px) {
    .owl-prev::after {
      top: -100px;
    }
    .owl-nav .owl-next::after {
      top: -105px;
    }

    .card {
      height: 300px;
    }
    .desc {
      margin-top: 1.2rem;
      font-size: 0.8rem;
    }
  }
`;
