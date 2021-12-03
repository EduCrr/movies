import styled from "styled-components";

export const ModalArea = styled.div`
  background-color: #16151d;
  color: white;
  width: 100%;
  height: ${(props) => (props.search ? "100vh" : "0")};
  top: ${(props) => (props.search ? "0vh" : "-200px")};
  transition: all ease 0.6s;
  position: fixed;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .search {
    width: 1100px;
    padding: 20px;
  }
  .btn {
    height: auto;
  }
`;
