import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vw;

  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background-color: #c9c9c9;
    height: 60px;
    > button {
      border-radius: 8px;
      padding: 0.75rem;
      border: none;
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
  > main {
    padding: 1rem;
    > ul {
      > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        > button {
          padding: 5px;
          cursor: pointer;
          background-color: black;
          color: white;
          border-radius: 50%;
          border: none;
        }
      }
    }
  }
`;
