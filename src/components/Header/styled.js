import styled from "styled-components";

export const HeaderArea = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: transparent;
  transition: all ease 0.3s;
  max-width: 1100px;
  margin: 50px auto;

  .headerLogo {
    text-transform: uppercase;
    letter-spacing: 5px;
    flex: 1;
  }

  .headerMenu {
    ul {
      display: flex;
      span {
        display: flex;
        margin-top: 2px;
        color: white;
        cursor: pointer;
      }
    }
    ul li {
      margin: 0px 25px;
    }
    ul a {
      transition: all ease 0.4s;

      &:hover {
        color: #ff0066;
      }
    }
  }
`;
