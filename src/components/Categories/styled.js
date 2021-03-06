import styled from "styled-components";

export const CategoriesArea = styled.div`
  .alice-carousel .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background-color: #e52864;
    padding: 20px;
    margin-bottom: 2rem;
    span {
      color: white !important;
      font-size: 20px;
    }
  }
  .tags {
    transform: scale(0.9);
    cursor: pointer;
    margin: 2rem 0px;
    background-color: #e52864;
    color: white;
    padding: 20px;
    text-align: center;
  }
  .btn {
    text-align: center;
    button {
      background-color: #e52864;
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
  @media (max-width: 1024px) {
    h2 {
      text-align: center;
    }
  }
`;
