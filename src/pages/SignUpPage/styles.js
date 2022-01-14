import styled from "styled-components"

const StyledSignUp = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
    input {
        height: 52px;
        width: 299px;
        border: none;
        border-radius: 8px;
        padding-left: 14px;
    }
    input::placeholder {
        
        font-size: 14px;
        color: #7E7E7E;
    }
    button{
        margin-top: 8px;
        height: 52px;
        width: 299px;
        border: none;
        border-radius: 8px;
        background-color: #FF4791;
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
    }
    a{
        margin-top: 8px;
        color: #FFFFFF;
        font-size: 14px;
        text-decoration: underline;
        font-family: "Roboto";
    }
`

export { StyledSignUp }