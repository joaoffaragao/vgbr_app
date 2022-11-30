import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    color: white;
    display: flex
    flex-direction:column;
    align-items: center;
    
    main{
        width: 100%;
        ul{
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 0 10px;
            li{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                min-width: 300px;

                div{ 
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    h2{
                        font-size: 14px
                    }
                }

            }
        }
    }
    
`;

export default Container;
