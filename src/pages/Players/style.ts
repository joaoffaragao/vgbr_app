import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  > main {
    width: 100%;
    padding: 1rem 2rem;
    max-width: 768px;
    > ul {
      > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        > button {
          padding: 15px;
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
