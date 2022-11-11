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
    > header {
      .nickBox {
        display: flex;
        gap: 0.25rem;
      }
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Container;
