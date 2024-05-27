import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ConnexionP from '../PagesCommunes/ConnexionP';
import Fonctionnalite1 from '../PagesCommunes/Fonctionnalite1';
import Fonctionnalite2 from '../PagesCommunes/Fonctionnalite2';
import Fonctionnalite3 from '../PagesCommunes/Fonctionnalite3';
import Layout from '../PagesCommunes/layouts/Layout'; 
import HomePageCC from '../ChefChantier/Pages/HomePageCC'; 
import MesChantierCC from '../ChefChantier/Pages/MesChantierCC'; 
import FormulaireCC from '../ChefChantier/Pages/FormulaireCC';
import FormulaireCC2 from '../ChefChantier/Pages/FormulaireCC2';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/connexion" />} />
      <Route path="/connexion" element={<ConnexionP />} />
      <Route path="/fonctionnalite1" element={<Fonctionnalite1 />} />
      <Route path="/fonctionnalite2" element={<Fonctionnalite2 />} />
      <Route path="/fonctionnalite3" element={<Fonctionnalite3 />} />
      <Route path="/formulaireCC" element={<FormulaireCC />} />
      <Route path="/formulaireCC2" element={<FormulaireCC2 />} />
      <Route path="/" element={<Layout />}></Route>
        <Route path="/" element={<Layout />}>
        <Route path="HomePageCC" element={<HomePageCC />} />
        <Route path="MesChantierCC" element={<MesChantierCC />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
