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
            flex-direction: column;
            gap: 1rem;
            padding: 0 10px;
            li{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                h2{
                    font-size: 14px
                }
            }
        }
    }
    
`;

export default Container;
