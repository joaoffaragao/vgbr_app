import styled from "styled-components";

export const ServeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  gap: 1.5rem;
  color: white;
  > main {
    width: 100%;
    max-width: 800px;
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
      max-width: 425px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;

      .team1,
      .team2 {
        width: 100%;
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

    @media screen and (min-width: 768px) {
      .players__box {
        max-width: 750px;
        .team1,
        .team2 {
          max-width: 325px;
        }
      }
    }
  }
`;
