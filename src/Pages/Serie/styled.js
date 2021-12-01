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
      height: 350px;
      width: 100%;
      object-fit: cover;
      transform: scale(0.9);
      transition: all ease 0.2s;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(2, 2, 2, 0.22);

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
`;
