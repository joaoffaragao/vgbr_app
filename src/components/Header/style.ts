import styled from "styled-components";

interface IProps {
  link?: string;
}

export const HeaderContainer = styled.header<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: #999999;
  height: 60px;
  width: 100%;
  -webkit-box-shadow: 0px 7px 18px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 18px 2px rgba(0, 0, 0, 0.75);

  > main {
    height: 100%;
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: ${(props) => {
      return props.link ? "space-between" : "center";
    }};

    > a {
      text-decoration: none;
      color: #000;
    }

    > button {
      border-radius: 8px;
      padding: 0.75rem;
      border: none;
      background-color: black;
      color: white;
      cursor: pointer;
    }
    > button:hover {
      background-color: white;
      color: black;
    }
  }
`;
