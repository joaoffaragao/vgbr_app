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
  }
`;
