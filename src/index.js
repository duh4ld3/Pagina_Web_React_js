import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Formulario from './formulario'
import './index.css';
import { Encabezado } from './encabezado';
import {Contenido} from './contenido';
import { Pie } from './pie';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render ( <div>
  
  <Encabezado/>
  <Contenido/>
  
  <App/>
 <Formulario/>

  <Pie/>
</div>
 )


