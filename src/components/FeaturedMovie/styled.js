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
        font-size: 60px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
      }
      .details {
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
              color: #ff0066;
              margin: auto;
            }
          }
          .featuredPoints {
          }
          .genres {
            background: #ff0066;
            color: white;
            display: inline-block;
            padding: 10px;
            margin-top: 20px;
          }
        }
        .infoRight {
          width: 500px;
        }
      }
    }
  }
`;
