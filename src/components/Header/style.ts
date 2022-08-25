import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
