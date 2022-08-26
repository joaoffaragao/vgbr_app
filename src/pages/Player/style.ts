import styled from "styled-components";

export const PlayerCardCotainer = styled.div`
  background-color: #0c0c0c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > main {
    width: 100%;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    gap: 1rem;

    > section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;

      > div {
        width: 100%;
        max-width: 300px;
        display: flex;
        color: white;
        align-items: center;
        justify-content: space-between;

        > img {
          width: 50px;
        }
      }

      .img_box {
        background-color: red;
        width: 75%;
        > img {
          width: 100%;
        }
      }
    }

    > .playerInfos {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: white;

      > ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    > main {
      align-items: flex-start;
      flex-direction: row;
    }
  }
`;
