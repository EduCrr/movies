import styled from "styled-components";

export const FavoritosArea = styled.div`
  margin: auto;

  max-width: 1100px;
  .area {
    display: flex;
    h1 {
      margin-top: 10rem;
      margin-bottom: 20px;
    }
  }
  .favoritesArea {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .favoritesItems {
      display: flex;
      flex-direction: column;
      width: 25%;

      .favoritesImage {
        img {
          height: 450px;
          width: 100%;
          transform: scale(0.9);
          transition: all ease 0.2s;
          object-fit: scale-down;
          &:hover {
            transform: scale(1);
            transition: all ease 0.2s;
          }
        }
      }
      .favoritesName {
        text-align: center;
        font-weight: bold;
      }
      .favoritesBtns {
        display: flex;
        justify-content: center;
        span {
          margin: 10px 20px;
          &:nth-child(2) {
            cursor: pointer;
          }
        }
      }
    }
  }
  hr {
    color: #acacac !important;
    opacity: 0.2;
    margin: 2rem auto;
  }
  @media (max-width: 1024px) {
    .area {
      justify-content: center;
    }
    h2 {
      text-align: center;
    }
    .favoritesItems {
      width: 33% !important;
    }
  }
  @media (max-width: 768px) {
    .favoritesItems {
      width: 50% !important;
    }
  }
  @media (max-width: 600px) {
    .favoritesItems {
      width: 100% !important;
    }
  }
`;
/*
.favoritesImage
.favoritesName
.favoritesDesc
.favoritesBtns
*/
