import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #0c0c0c;
  border-radius: 0.5rem;
  gap: 1rem;
  > header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
  }
  > main {
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;

    > form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 1rem;
      > .InputBox {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        > input {
          height: 2rem;
        }
      }
      > button {
        height: 2rem;
        border: none;
        border-radius: 0.5rem;
        background: white;
        font-size: 1rem;
        font-weight: bold;
      }

      > button:hover {
        background: grey;
      }
    }
  }
`;

export default Container;
