import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ConnexionP from "../PagesCommunes/ConnexionP"






const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConnexionP></ConnexionP>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)