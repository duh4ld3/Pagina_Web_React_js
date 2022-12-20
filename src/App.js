import React from 'react'
import Galeria from "./galeria"
import './App.css';


const galerias =[
  { descripcion : " lenguaje multiplataforma, orientado a objetos y centrado en la red que se puede utilizar como una plataforma en sí mismo.",url  : "img/java.jpg"},
  { descripcion : " es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML",url : "img/css.jpg"},
  { descripcion: "es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario", url : "img/react.jpg"},
  { descripcion: "es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.", url : "img/html.jpg"},
  { descripcion: "Python es un lenguaje de programación de propósito general y alto nivel.", url : "img/python.jpg"},
  { descripcion: "es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica", url : "img/js.jpg"}
];

const galeriaItems = galerias.map(galeria=>
  <Galeria descripcion={galeria.descripcion} 
  url={galeria.url} alt={galeria.alt}></Galeria>
  
  );

  function App(){
    return(
        <div className="container mt-2">
            <div className='row row-cols-1 row-cols-6'>
                {galeriaItems}
            </div>
        </div>
    );
}


export default App;
