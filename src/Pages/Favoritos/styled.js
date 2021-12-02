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
          object-fit: cover;
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
`;
/*
.favoritesImage
.favoritesName
.favoritesDesc
.favoritesBtns
*/
