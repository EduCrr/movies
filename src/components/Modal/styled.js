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
  form {
    z-index: 99;
    display: flex;
    flex: 1;
    input {
      width: 100%;
      cursor: pointer;
      background-color: white;
      padding: 20px;
      color: #777;
      border: 0px;
      outline: 0;
      transition: all ease 0.4s;
      font-family: "Spartan", sans-serif;
      font-weight: bold;
    }
    .btn {
      height: auto;
    }
  }
`;
