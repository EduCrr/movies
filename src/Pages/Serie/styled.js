import styled from "styled-components";

export const SerieArea = styled.div`
  height: 100vh;
  .featuredVertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #16151d 5%, transparent 95%);
  }
  .infos {
    height: inherit;
    transform: translate(0%, 20%);
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    .infoArea {
      display: flex;
    }
    .poster {
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        height: 350px;
        width: auto;
        padding-right: 25px;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      svg {
        color: #e52864;
      }
      .year,
      .vote {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
        svg {
          margin-right: 10px;
        }
      }
      .title {
        max-width: 500px;
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
        p {
          font-size: 16px;
        }
      }
    }
    a {
      background-color: #e52864;
      border: none;
      outline: 0;
      padding: 8px 20px;
      color: white;
      border-radius: 4%;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    .infos {
      justify-content: center;
      align-items: center;
    }
    .infoArea {
      flex-direction: column;
      text-align: center;
    }
    .details {
      margin-top: 20px !important;
      align-items: center;
    }
    .poster {
      img {
        margin: auto;
        padding-right: 0px !important;
      }
    }
  }
`;

export const SerieContent = styled.div`
  max-width: 1100px;
  margin: 3rem auto;

  h2 {
    margin-bottom: 3rem;
  }

  .desc {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .descLeft {
      max-width: 500px;
      p {
        margin-top: 30px;
      }
    }

    .descRight {
      text-align: center;
    }
  }
  .actors {
    margin: 3rem auto;
    .title,
    p {
      text-align: center;
    }
    img {
      height: 450px;
      width: 100%;
      object-fit: scale-down;
      transform: scale(0.9);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(1);
      }
    }
    .alice-carousel .alice-carousel__next-btn-item,
    .alice-carousel__prev-btn-item {
      background-color: #e52864;
      padding: 20px;
      margin-top: 20px;
      span {
        color: white !important;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 1024px) {
    img {
      object-fit: scale-down !important;
    }
  }
  @media (max-width: 768px) {
    h2 {
      text-align: center;
    }
    .desc {
      text-align: center;
      flex-direction: column;
      .descRight {
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 375px) {
    margin-top: 5rem;
    p {
      padding: 0px 20px;
    }
  }
`;
