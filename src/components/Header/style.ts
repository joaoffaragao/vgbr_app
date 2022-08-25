import styled from "styled-components";

interface IProps {
  link?: string;
}

export const HeaderContainer = styled.header<IProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => {
    return props.link ? "space-between" : "center";
  }};
  padding: 0 2rem;
  background-color: #c9c9c9;
  height: 60px;
  > button {
    border-radius: 8px;
    padding: 0.75rem;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
