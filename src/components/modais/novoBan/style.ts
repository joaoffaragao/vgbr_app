import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #0c0c0c;
  border-radius: 0.5rem;
  > header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
  }
`;

export default Container;
