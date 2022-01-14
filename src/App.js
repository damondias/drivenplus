import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Subscriptions from "./pages/Subscriptions";
import SubscriptionsId from "./pages/SubscriptionsId";
import Home from "./pages/Home";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import UserContext from "./Providers/auth";

function App() {
    const [token, setToken] = useState(null);
    const [idPlano, setIdPlano] = useState('');    
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    return (
       <UserContext.Provider value={{ token, setToken, idPlano, setIdPlano, price, setPrice, id, setId, image, setImage }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/subscriptions/:id" element={<SubscriptionsId />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;