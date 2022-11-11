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
    height: 75vh;

    > button {
      width: 100%;
      height: 102px;
      border: none;
      font-size: 2rem;
      font-weight: 600;
      background-color: white;
      color: black;
      border: 1px solid #0c0c0c;
      border-radius: 8px;

      cursor: pointer;
      > .box_server {
        width: 100%;
        height: 100px;
        display: flex;

        > .imgBox {
          height: 100px;
          width: 100px;
          border-radius: 8px;
          display: flex;
          > img {
            border-radius: 8px 0 0 8px;
            width: 100%;
            height: 100%;
          }
        }
        > .Info {
          width: calc(100% - 100px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          font-size: 8px;
          color: black;
          padding: 10px 2px;

          .MapName {
            width: 100%;
            font-size: 16px;
          }
          .Players,
          .Fila {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
          }
          .serverOutText {
            font-size: 24px;
          }
        }
      }
      > .Logo__Membros {
        display: none;
      }
      > .MembrosBox {
        width: 100%;
        height: 100px;
        display: flex;

        > .imgBox {
          height: 100px;
          width: 100px;
          border-radius: 8px;
          display: flex;
          > img {
            border-radius: 8px 0 0 8px;
            width: 100%;
            height: 100%;
          }
        }
        > .Info {
          width: calc(100% - 100px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          font-size: 8px;
          color: black;
          padding: 10px 16px;
          .box__name {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 100%;
          }
          .MapName {
            width: 100%;
            font-size: 16px;
          }
          .Players,
          .Fila {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      > button {
        display: flex;
        width: 250px;
        height: 300px;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        > .box_server {
          align-items: flex-start;
          flex-direction: column;
          width: 100%;
          align-items: center;

          height: 100%;
          width: 248px;

          > .imgBox {
            width: 248px;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
              border-radius: 8px;
            }
          }
        }
        .Logo__Membros {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0c0c0c;
          height: 50%;
        }
        > .MembrosBox {
          width: 100%;
          align-items: center;
          padding: 5px;

          height: 50%;
          width: 248px;
          > .Info {
            padding: 5px;
          }
        }
      }
    }

    > button:hover {
      background-color: #4d4d4d;
      border: 1px solid black;
    }
  }
`;
