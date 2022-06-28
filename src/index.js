import React from 'react';
import ReactDOM from 'react-dom/client';
import Amanfood from "./Application/App/Amanfood";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
       <Amanfood />
   </BrowserRouter>
  </React.StrictMode>
);
