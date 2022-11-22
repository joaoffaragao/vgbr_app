import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  > main {
    max-width: 20rem;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > header {
      .nickBox {
        display: flex;
        gap: 0.25rem;
      }
      display: flex;
      justify-content: space-between;
    }
    > main {
      display:flex;
      flex-direction: column;
      gap: 1rem;
      > button {
        height: 2rem;
        width: 100%;
        max-width: 320px;
        border: none;
        border-radius: 8px;
        background: white;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
`;

export default Container;
