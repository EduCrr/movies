import styled from "styled-components";
export const HeaderArea = styled.header`
  .menu {
    display: none;
  }
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: "10px 0px";
  background-color: transparent;
  transition: all ease 0.4s;
  max-width: 1100px;
  margin: ${(props) => (props.black ? "10px auto" : "50px auto")};

  .headerLogo {
    text-transform: uppercase;
    letter-spacing: 5px;
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
      margin: 0px 0px 0px 35px;
    }
    ul a {
      transition: all ease 0.4s;

      &:hover {
        color: #e52864;
      }
    }
  }
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
  @media (max-width: 650px) {
    .menu {
      display: flex;
      padding: 0px 20px;
      z-index: 9;
      svg {
        z-index: 999;
      }
    }
    .headerMenu {
      ul,
      svg {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ul {
        top: 0;
        right: ${(props) => (props.open ? "0" : "-35px")};
        width: ${(props) => (props.open ? "40%" : "0")};
        height: 100vh;
        background-color: #16151d;
        position: fixed;
        flex-direction: column;
        transition: all ease 0.4s;
      }
      ul li {
        margin: 10px 0px 10px 0px;
      }
    }
  }
`;
