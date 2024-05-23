import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ConnexionP from '../PagesCommunes/ConnexionP';
import Fonctionnalite1 from '../PagesCommunes/Fonctionnalite1.jsx';
import Fonctionnalite2 from '../PagesCommunes/Fonctionnalite2.jsx';
import Fonctionnalite3 from '../PagesCommunes/Fonctionnalite3.jsx';
import MainContent from '../PagesCommunes/components/MainContent.jsx';
import Layout from '../PagesCommunes/layouts/Layout.jsx'; 

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/connexion" />} />
      <Route path="/connexion" element={<ConnexionP />} />
      <Route path="fonctionnalite1" element={<Fonctionnalite1 />} />
      <Route path="fonctionnalite2" element={<Fonctionnalite2 />} />
      <Route path="fonctionnalite3" element={<Fonctionnalite3 />} />
      <Route path="/app" element={<Layout />}>
        <Route path="maincontent" element={<MainContent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
