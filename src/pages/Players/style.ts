import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vw;

  display: flex;
  flex-direction: column;

  > main {
    padding: 1rem 2rem;
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
