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
    const [userToken, setUserToken] = useState(null);
    
    const [price, setPrice] = useState('');
    const [userImage, setUserImage] = useState('');
    const [id, setId] = useState('');
    
    return (
       <UserContext.Provider value={{ userToken, setUserToken, price, setPrice, id, setId, userImage, setUserImage }}>
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