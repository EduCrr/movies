import styled from "styled-components";

export const ModalArea = styled.div`
  background-color: #16151d;
  color: white;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .search {
    width: 1100px;
    padding: 20px;
    display: flex;
  }
  .btn {
    height: auto;
  }
`;
