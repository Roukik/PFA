import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayoul';
import ConnexionP from "../PagesCommunes/ConnexionP"



const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Route path="/ConnexionP" element={<ConnexionP />} />
    <Routes>

    <Route path="/" element={<MainLayout />}>
    </Route>
    </Routes>
    </Router>
  </React.StrictMode>
);