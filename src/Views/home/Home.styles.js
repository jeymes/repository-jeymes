import styled from "styled-components";

export const Container = styled.header`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-top: 2px solid #111;
width: 100%;
height: 100vh;
`;
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: #306959;
        font-size: 40px;
        font-weight: 700;
    }
`;
export const SubContainer = styled.header`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 95%;
/* border: 1px solid red; */
`;
export const Repository = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #111;
    border-radius: 10px;
    margin-inline-end: 10px;
    margin-block-start: 10px;
    width: 300px;
    height: 350px;

    h2{
        color: #111;
        border-bottom: 2px solid #111;
        text-align: center;
        font-weight: 700;
        width: 90%;
        padding: 3px;
    }

    .Opcoes{
        display: flex;
        height: 70%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        width: 100%;

        h3{
            color: #111;
            text-align: center;
        font-weight: 700;
        }
        p{
            color: #111;
            text-align: center;
        }
    }

    .ContainerButton{
        margin-bottom: 10px;
        button{
        width: 200px;
        height: 30px;
        border-radius: 10px;
        border: none;
        background-color: #306959;

        a{
            color: white;
            font-size: 18px;
            text-decoration: none;
            font-weight: 700;
        }
    }
    }
    
`;
