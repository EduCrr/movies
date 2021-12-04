import styled from "styled-components";

export const FilmesArea = styled.main`
  max-width: 1100px;
  margin: 3rem auto;

  h1 {
    font-size: 40px;
  }

  .categories {
    margin-top: 3rem;
  }
  @media (max-width: 1024px) {
    h1 {
      text-align: center;
    }
  }
`;
