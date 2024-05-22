import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ConnexionP from "../PagesCommunes/ConnexionP";
import Fonctionnalite1 from "../PagesCommunes/Fonctionnalite1.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/connexion" />} />
      <Route path="/connexion" element={<ConnexionP />} />
      <Route path="/fonctionnalite1" element={<Fonctionnalite1 />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
