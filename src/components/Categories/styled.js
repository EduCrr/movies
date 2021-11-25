import styled from "styled-components";

export const CategoriesArea = styled.div`
  .alice-carousel .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background-color: #ff0066;
    padding: 20px;
    span {
      color: white !important;
      font-size: 20px;
    }
  }
  .tags {
    transform: scale(0.9);
    cursor: pointer;
    margin: 2rem 0px;
    background-color: #ff0066;
    color: white;
    padding: 20px;
    text-align: center;
  }
  .btn {
    text-align: center;
    button {
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
`;
