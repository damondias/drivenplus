import styled from "styled-components";

const StyledSubscriptions = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap:24px;
    background-color: black;
    width: 100%;
    height: 100vh;
    h1 {
        font-family: "Roboto";
        font-size: 32px;
        font-weight: 700;
        color: #FFFFFF;
    }
    .planos-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .plano {
        width: 290px;
        height: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        background-color: black;
        border-radius: 12px;
        border: solid 3px #7E7E7E;
    }
    .plano h3 {
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 700;
        color: #FFFFFF;
        text-decoration: none;
    }
`

export { StyledSubscriptions }