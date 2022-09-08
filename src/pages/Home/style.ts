import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #0c0c0c;
  height: 100vh;
  color: white;
  align-items: center;
  .icone__box {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    padding: 1rem;
    .icone_site {
      img {
        color: white;
      }
    }
  }
  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    > .Text__box__desktop {
      display: none;
      font-family: "Qwitcher Grypen", cursive;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > h1 {
        text-align: center;
        font-size: 3rem;
      }
      > h2 {
        text-align: center;
        font-size: 2rem;
      }
    }
    > .Text__box__mobile {
      display: flex;
      font-family: "Qwitcher Grypen", cursive;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > h1 {
        text-align: center;
        font-size: 5rem;
      }
    }
    > .Link__Box {
      font-family: "Qwitcher Grypen", cursive;
      font-size: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .LinkEntrar {
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 64px;
        text-decoration: none;
        color: black;
        background-color: white;
        width: 300px;
        height: 75px;
        border-radius: 8px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    > main {
      flex-direction: row;
      height: 50%;
      gap: 0;
      .Text__box__desktop {
        height: 100%;
        display: flex;
        background-color: white;
        color: #0c0c0c;
        width: 350px;
        padding: 1rem;
        border-radius: 8px 0px 0px 8px;
        > h1 {
          font-size: 5rem;
        }
      }
      > .Text__box__mobile {
        display: none;
      }
      > .Link__Box {
        height: 100%;
        border: 1px solid white;
        border-radius: 0px 8px 8px 0px;
        width: 350px;
      }
    }
  }
`;
