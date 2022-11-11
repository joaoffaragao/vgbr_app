import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: transparent;
  height: 100vh;
  width: 100%;
  color: white;
  align-items: center;
  position: absolute;
  top: 0px;

  > main {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    > .Link__Box {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      padding-bottom: 75px;

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
        display: flex;
      }
    }
  }
`;
