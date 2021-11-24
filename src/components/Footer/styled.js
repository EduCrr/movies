import styled from "styled-components";

export const FooterArea = styled.footer`
  max-width: 1100px;
  margin: auto;
  hr {
    border-color: #acacac;
    opacity: 0.3;
    margin-bottom: 2rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .content,
  ul,
  li {
    display: flex;
  }
  ul,
  a {
    margin-right: 10px;
  }
`;
