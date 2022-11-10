import styled from "styled-components";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  .Logo {
    width: 100%;
    background-size: cover;
    overflow: hidden;
  }
  .Logo2 {
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    display: none;
  }
  @media screen and (min-width: 768px) {
    .Logo {
      display: none;
    }
    .Logo2 {
      display: flex;
    }
  } ;
`;

export default BackgroundContainer;
