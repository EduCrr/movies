import styled from "styled-components";

export const FooterArea = styled.footer`
  max-width: 1100px;
  margin: 5rem auto 3rem auto;

  hr {
    border-color: #acacac;
    opacity: 0.3;
    margin-bottom: 2.5rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .content,
  ul,
  li {
    display: flex;
  }
  ul,
  a {
    margin-right: 25px;
    transition: all ease 0.4s;

    &:hover {
      color: #e52864;
    }
  }
  .footerInfo {
    strong {
      color: white;
    }
    color: #e52864;
  }
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    ul,
    li {
      flex-direction: column;
      margin: auto;
    }
    ul,
    a {
      text-align: center;
    }
    .footerInfo {
      margin-top: 20px;
    }
  }
`;
