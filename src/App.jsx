import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Acceuil from "./pages/accueil";
import Signin from "./pages/signIn";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default App
