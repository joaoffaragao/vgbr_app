import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > main {
    width: 100%;
    padding: 1rem 2rem;
    max-width: 800px;
    background: #000000;
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
        > .MembrosBox {
          width: 100%;
          height: 100px;
          display: flex;

          > .imgBox {
            height: 100px;
            width: 100px;
            border-radius: 8px;
            display: flex;
            > img {
              border-radius: 8px 0 0 8px;
              width: 100%;
              height: 100%;
            }
          }
          > .Info {
            width: calc(100% - 100px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 16px;
            font-size: 8px;
            color: black;
            padding: 10px 16px;
            .MapName {
              width: 100%;
              font-size: 16px;
            }
            .Players,
            .Fila {
              width: 100%;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
            }
          }
        }
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
