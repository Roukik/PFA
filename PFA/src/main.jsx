import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
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