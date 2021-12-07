import styled from "styled-components";

export const FeaturedMovieArea = styled.div`
  height: 100vh;
  .featuredVertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #16151d 5%, transparent 95%);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .infoList {
      .title {
        font-size: 45px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        width: 1000px;
        line-height: 55px;
        margin: auto;
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
    .title {
      width: 100% !important;
      font-size: 40px;
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
        padding: 0px 5px;
      }
    }
  }

  @media (max-width: 375px) {
    .title {
      font-size: 30px !important;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    height: 200vh;
  }
`;
