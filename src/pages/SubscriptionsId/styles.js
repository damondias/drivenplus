import styled from "styled-components";

const StyledSubscriptionsid = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    gap: 20px;
    background-color: black;
    .arrow {
        position: fixed;
        top: 24px;
        left: 22px;
    }
    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .logo h1 {
        font-family: "roboto";
        font-size: 32px;
        font-weight: 700;
        color: white;
        margin-top: 8px;
    }
    .info { 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 299px;
    }
    .beneficios-title {
        display: flex;
        gap: 3px;
        margin-bottom: 6px;
        margin-top: 10px;
    }
    .beneficios-title h1{
        font-family: "roboto";
        font-size: 16px;
        font-weight: 400;
        color: white;  
    }
    .preco-title {
        display: flex;
        gap: 3px;
        margin-bottom: 6px;
        margin-top: 10px;
    }
    .preco-title h1{
        font-family: "roboto";
        font-size: 16px;
        font-weight: 400;
        color: white;
    }
    .info p {
        font-family: "roboto";
        font-size: 14px;
        font-weight: 400;
        color: white;
        margin-bottom: 2px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
    }
    input{
        width: 299px;
        height: 52px;
        border: none;
        border-radius: 8px;
        padding: 0 14px;
    }
    
    .inputs-menores {
        width: 299px;
        display: flex;
        
        gap: 9px;
    }
    .inputs-menores input{
        width: 145px;
    }
    input::placeholder{
        font-size: 14px;
        color: #7E7E7E;
    }
    button{
        margin-top: 4px;
        height: 52px;
        width: 299px;
        border: none;
        border-radius: 8px;
        background-color: #FF4791;
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
    }
    .confirmacao {
        position: absolute;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .close{
        position: fixed;
        border-radius: 5px;
        height: 30px;
        width: 30px;
        padding-top: 1px;
        padding-right: 1px;
        top: 24px;
        right: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .container-confirmação {
        position: relative;
        width: 248px;
        height: 210px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        z-index: 2000;
    }
    .container-confirmação h1 {
        color: black;
        font-family: "Roboto";
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-bottom: 47px;
    }
    .sim-nao{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 14px;
        margin-bottom: -15px;
    }
    .nao{
        height: 52px;
        width: 95px;
        background-color: #CECECE;
        border-radius: 8px;
        color: white;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 14px;
    }
    .nao{
        height: 52px;
        width: 95px;
        background-color: #CECECE;
        border-radius: 8px;
        color: white;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 14px;
    }
    .sim{
        height: 52px;
        width: 95px;
        background-color: #FF4791;
        border-radius: 8px;
        color: white;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 14px;
    }
`

export {StyledSubscriptionsid}