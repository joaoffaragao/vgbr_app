import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > nav {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    > button {
      width: 200px;
      height: 200px;
      border-radius: 8px;
      border: none;
      font-size: 2rem;
      font-weight: 600;
      background-color: #0c0c0c;
      color: white;
      cursor: pointer;
    }

    > button:hover {
      background-color: #4d4d4d;
      border: 1px solid black;
    }
  }
`;
