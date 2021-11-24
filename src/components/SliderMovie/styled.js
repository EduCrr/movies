import styled from "styled-components";

export const SliderMovieArea = styled.div`
  max-width: 1100px;
  margin: auto;
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 1rem;
  }
  .title {
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
  }
  .infoSlider {
    display: flex;
    justify-content: space-around;
    span {
      color: white;
    }
  }

  img {
    height: 450px;
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    object-fit: cover;
    &:hover {
      transform: scale(1);
      transition: all ease 0.2s;
    }
  }
  .alice-carousel .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background-color: #ff0066;
    padding: 20px;
    span {
      color: white !important;
      font-size: 20px;
    }
  }
  .normalArea {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    button {
      margin: 20px auto;
      background-color: #ff0066;
      border: none;
      outline: 0;
      padding: 18px 40px;
      color: white;
      border-radius: 4%;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 15px;
    }
  }
  .normal {
    width: 25%;
    margin-bottom: 20px;
  }
  .infos {
    margin-top: auto;
  }
`;
