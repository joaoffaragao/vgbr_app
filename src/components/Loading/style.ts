import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  > main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    img {
      height: 100px;
      width: 100px;
      animation: go-back 1s infinite alternate;
      transition: 1s;
    }
  }

  @keyframes go-back {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
`;
