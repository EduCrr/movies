import styled from "styled-components";

export const FeaturedMovieArea = styled.div`
  height: 100vh;
  .featuredVertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #16151d 5%, transparent 95%);
    display: flex;
    flex-direction: column;

    .infoList {
      max-width: 1100px;
      margin: auto;
      .title {
        display: flex;
        align-items: flex-start;
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        width: 550px;
        justify-content: flex-start;
        line-height: 55px;
      }
      .details {
        margin-top: 30px !important;
        p {
          color: white;
        }
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1100px;
        margin: auto;
        .infoLeft {
          flex: 1;
          .featuredPoints,
          .featuredYear,
          .featuredBudget {
            display: inline-block;
            margin-right: 20px;
            svg {
              color: #e52864;
              margin: auto;
            }
          }
          .featuredPoints {
          }
          .genres {
            background: #e52864;
            color: white;
            display: inline-block;
            padding: 10px;
            margin-top: 20px;
          }
        }
        .infoRight {
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    height: 120vh;
    .title {
      padding: 0px 20px;
      width: 100% !important;
      font-size: 40px;
      text-align: center;
    }
    .details {
      flex-direction: column;
      align-items: center !important;
      text-align: center;
      .infoLeft .infoRight {
        width: 100%;
      }
      .infoRight {
        margin-top: 30px;
        width: 100% !important;
        padding: 0px 20px;
      }
    }
  }

  @media (max-width: 375px) {
    .title {
      font-size: 30px !important;
    }
  }
  @media screen and (orientation: landscape) and (max-device-width: 812px) {
    height: 200vh;
  }
`;
