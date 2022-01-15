import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { PersonCircle } from 'react-ionicons'

import UserContext, { useAuth } from '../../Providers/auth';
import { StyledHome } from "./styles";

function Home() {

    const  {idPlano, token , name} = useContext(UserContext)

    const [links, setLinks] = useState(null);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    const navigate = useNavigate()

    function handleDelete(e) {

        e.preventDefault();

        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)

        promise.then(() => {
            alert("Cancelado com sucesso!")
            navigate("/subscriptions")
        })

        promise.catch(error => alert(error.response.data.message));
    }

    useEffect(()=> {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`, config)

        promise.then(response => {
            console.log(response.data)
            setLinks(response.data)
        });

    }, []);

    if(links === null) {
        return <h1>Carregando...</h1>
    }

    return(
        <StyledHome>
            <div className="topo">
                <img src={links.image}/>
                <PersonCircle color={'#FFFFFF'} width='40px' height='40px'/>
            </div>
            <div className="title">Olá, {name}</div>
            <div className="links">
                {links.perks.map(link => (
                <a key={link.id} href={link.link}>{link.title}</a>
                ))}
            </div>
            <div className="footer">
                <button className="mudar-plano" onClick={()=> navigate('/subscriptions')}>Mudar Plano</button>
                <button className="cancelar" onClick={(e) => handleDelete(e)}>Cancelar Plano</button>
            </div>
        </StyledHome>
    )
}

export default Home;