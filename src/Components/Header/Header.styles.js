import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 250px;
/* border: 1px solid red; */
`;
export const SubContainer = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
width: 95%;
/* border: 1px solid red; */
`;
export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    img{
    width: 200px;
    border-radius: 100%;
}
`;
export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    h1{
        color: #306959;
        font-size: 50px;
    }
`;
export const ContainerDescricao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    h2{
        color: #306959;
    }
`;
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    h2{
        color: #306959;
    }
`;
export const ContainerContactor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    /* border: 1px solid red; */

    h2{
        color: #306959;
    }
`;
