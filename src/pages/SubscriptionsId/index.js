import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ClipboardOutline } from 'react-ionicons'
import { CashOutline } from 'react-ionicons'
import { ArrowBackOutline } from 'react-ionicons'
import { CloseOutline } from 'react-ionicons'

import UserContext, { useAuth } from '../../Providers/auth';
import { StyledSubscriptionsid } from './styles';


export default function Subscriptionsid() {

    const  {price, image, id, token, setIdPlano} = useContext(UserContext)

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityNumber, setSecurityNumber] = useState('');
    const [expirationDate, setexpirationDate] = useState('');

    const [showConfirmation, setShowConfirmation] = useState(false);

    const navigate = useNavigate();

    console.log(token)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    function handleSubscription(e) {

        e.preventDefault();

        console.log(config);

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', {
            membershipId: id,
            cardName: cardName,
            cardNumber: cardNumber,
            securityNumber: securityNumber,
            expirationDate: expirationDate
        }, config);

        promise.then();

        promise.catch(error => console.log(error.response));

    }

    function confirmation(e) {

        e.preventDefault();

        setShowConfirmation(!showConfirmation);
    }

    function goToHome(e) {
        e.preventDefault();

        setIdPlano(id);
        handleSubscription(e);
        navigate('/home');
    }

    return(
        <StyledSubscriptionsid>
            <div className='arrow' onClick={() => navigate('/subscriptions')}>
            <ArrowBackOutline color={'#ffffff'} height="40px" width="40px"/>
            </div>
            <div className="logo">
                <img src={image} alt="logo"/>
                <h1>Driven Plus</h1>
            </div>
            <div className="info">
                <div className="beneficios-title">
                    <ClipboardOutline color={'#FF4791'} height="16px" width="12px"/>
                    <h1>Benefícios:</h1>
                </div>
                <p>1. Brindes exclusivos</p>
                <p>2. Materiais bônus de web</p>
                {id === 2 && <p>3. Aulas bônus de tech</p>}
                {id === 3 && <p>3. Aulas bônus de tech</p>}
                {id === 3 && <p>4. Mentorias personalizadas</p>}
                <div className="preco-title">
                    <CashOutline color={'#FF4791'} height="16px" width="12px"/>
                    <h1>Preço:</h1>
                </div>
                <p>R$ {price} cobrados mensalmente</p>
            </div>
            <form>
                <input type="name" placeholder="Nome impresso no cartão" onChange={(e) => setCardName(e.target.value)}/>
                <input type="card" placeholder="Dígitos do cartão" onChange={(e) => setCardNumber(e.target.value)}/>
                <div className='inputs-menores'>
                    <input type="CVV" placeholder="CVV" onChange={(e) => setSecurityNumber(e.target.value)}/>
                    <input type="validity" placeholder="Validade" onChange={(e) => setexpirationDate(e.target.value)}/>
                </div>
                <button type="submit" onClick={(event) => confirmation(event)}>ASSINAR</button>
            </form>
            {showConfirmation && (<div className='confirmacao'>
                <div className='close' onClick={(event) => confirmation(event)}>
                    <CloseOutline color={'#000000'} height='25px' width='25px'/>
                </div>
                <div className='container-confirmação'>
                    <h1>Tem certeza que deseja assinar o plano Driven Plus (R$ {price})?</h1>
                    <div className='sim-nao'>
                        <button onClick={(event) => confirmation(event)} className="nao">Não</button>
                        <button onClick={(event) => goToHome(event)} className="sim" >Sim</button>
                    </div>
                </div>
            </div>)}
        </StyledSubscriptionsid>
    )
}