import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vw;

  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c9c9c9;
    height: 60px;
  }
  > main {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    > .playerInfos {
      width: 100%;
      > ul {
        width: 100%;
        > li {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
`;
