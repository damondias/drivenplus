import styled from "styled-components";

const StyledHome = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: black;
.topo {
    display: flex;
    justify-content: space-between;
    padding: 0 17px;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    margin-top: 18px;
}
.topo img {
    width: 75px;
    margin-top: 15px;
    margin-left: 15px;
}
.title {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    color: white;
    position: fixed;
    top: 95px;
}
.links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: fixed;
    top: 176px;
}
a {
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border-radius: 8px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: fixed;
    top: 543px;
}
.mudar-plano {
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border-radius: 8px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
}
.cancelar {
    width: 299px;
    height: 52px;
    background-color: #FF4747;
    border-radius: 8px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
}
`

export { StyledHome }