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
    cursor: pointer;
    object-fit: scale-down;
    &:hover {
      transform: scale(1);
      transition: all ease 0.2s;
    }
  }
  .alice-carousel .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background-color: #e52864;
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
  }
  .normal {
    width: 25%;
    margin-bottom: 20px;
  }
  .infos {
    margin-top: auto;
  }
  @media (max-width: 1024px) {
    h1 {
      text-align: center;
    }
    .title {
      margin: auto;
      max-width: 300px;
    }
    .normal {
      width: 33%;
    }
  }
  @media (max-width: 768px) {
    .normal {
      width: 50%;
    }
    .infoSlider {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 600px) {
    .normal {
      width: 100%;
    }
  }
`;
