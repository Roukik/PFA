import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ConnexionP from "../PagesCommunes/ConnexionP"
import Fonctionnalite1 from "../PagesCommunes/Fonctionnalite1"




const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConnexionP></ConnexionP>
    <Fonctionnalite1></Fonctionnalite1>
    <RouterProvider router={router} />
  </React.StrictMode>,
)