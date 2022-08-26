import styled from "styled-components";

export const ServeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > main {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    > h1 {
      font-size: 1rem;
      font-weight: 800;
    }
    .mapa {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      > h2 {
        font-weight: 600;
      }
      > img {
        width: 100%;
      }
    }
    .infos {
      width: 100%;
    }
    .info__card {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
    }
    .proximo__map {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      > h2 {
        font-weight: 600;
      }
    }

    .players__box {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      .team1 {
        width: 100%;
        max-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        > ul {
          width: 100%;
          list-style: none;
          > li {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
      .team2 {
        width: 100%;
        max-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        > ul {
          width: 100%;
          list-style: none;
          > li {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;
