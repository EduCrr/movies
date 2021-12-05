import styled from "styled-components";

export const HomeArea = styled.main``;

export const SingleMovie = styled.div`
  max-width: 1100px;
  margin: 5rem auto;

  .infoSingle {
    background: linear-gradient(to right, #16151d 25%, transparent 90%);
    height: inherit;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 25px;
    .infos {
      p {
        color: white;
      }
      margin-bottom: 10px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      background-color: #e52864;
      display: inline;
      padding: 5px 10px;
    }

    .titleSingle {
      margin-top: 10px;
      font-size: 35px;
      font-weight: bold;
    }
    .infos {
      .icons {
        margin-bottom: 10px;
        display: flex;
        align-items: flex-start;
      }
      svg {
        margin-right: 10px;
        color: #e52864;
      }
    }
    .overview {
      width: 50%;
    }
  }
  @media (max-width: 600px) {
    .overview {
      width: 100% !important;
    }
  }
  @media (max-width: 375px) {
    .titleSingle {
      font-size: 30px !important;
    }
  }
`;
