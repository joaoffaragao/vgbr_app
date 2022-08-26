import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > main {
    width: 100%;
    padding: 1rem 2rem;
    max-width: 768px;
    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      > li {
        display: flex;
        align-items: center;
        height: 50px;
        width: max-content;
        padding: 1rem;
        background-color: #000000;
        border-radius: 8px;
        color: white;
        gap: 10px;
        cursor: pointer;
        border: 1px solid black;
      }
      > li:hover {
        background-color: white;
        color: black;
      }
    }

    @media screen and (min-width: 768px) {
      > ul {
        display: flex;
        flex-direction: row;

        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    > main {
      max-width: 1024px;
    }
  }
`;
