import styled from "styled-components";

export const SearchArea = styled.div`
  transition: all ease 0.3s;
  .btn {
    text-align: center;
  }
  .submit {
    margin: 2rem auto;
    max-width: 600px;

    input {
      background-color: transparent;
      border-bottom: 1px solid #acacac;
      padding: 10px 0px;
      color: white;
    }
  }
  @media (max-width: 768px) {
    input {
      margin: auto;
      width: 70%;
    }
  }
`;
