import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";

import { StyledSignUp } from "./styles"

 function SignUpPage() {

    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function handleCadastro(e) {

        e.preventDefault();

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        });

            promise.then(response => {
            console.log(response.data)
            navigate('/')
            });

            promise.catch(error => alert(error.response.data.message));

    }

    return(
        <StyledSignUp>
            <form onSubmit={handleCadastro}>
                <input type="name" placeholder="Nome " onChange={(e) => setName(e.target.value)}/>
                <input type="CPF" placeholder="CPF" onChange={(e) => setCpf(e.target.value)}/>
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">ENTRAR</button>
                <a onClick={()=> navigate('/')}>Já possuí uma conta? Entre</a>
            </form>
        </StyledSignUp>
    )
}

export default SignUpPage;