import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  color: white;
  justify-content: center;
  padding: 0.5rem;

  > form {
    max-width: 20rem;
    border: 1px solid white;
    border-radius: 0.5rem;
    height: 400px;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    > .InputBox {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      > input {
        height: 32px;
        font-size: 16px;
        padding: 0 00.5rem;
        border: none;
        border-radius: 0.25rem;
      }
      > p {
        color: red;
      }
    }
    > button {
      height: 2rem;
      width: 50%;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: bold;
      background-color: white;
    }
    > span {
      color: red;
    }
    > button:hover {
      background-color: lightgray;
      cursor: pointer;
    }
  }
`;

export default Container;
