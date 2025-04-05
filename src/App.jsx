import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/accueil";
import Signin from "./pages/signUp";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/signUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App