import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    > img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    > div {
      height: 100%;
      padding: 250px;
      > img {
        width: 75%;
      }
    }
  }
`;

export default Container;
