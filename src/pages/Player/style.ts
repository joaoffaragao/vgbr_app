import styled from "styled-components";

export const PlayerCardCotainer = styled.div`
  background-color: #0c0c0c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    width: 100%;
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
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    gap: 1rem;

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
`;
