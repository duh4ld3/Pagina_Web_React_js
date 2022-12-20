import Imagen from './imagen';
import Descripcion from './descripcion';

function Galeria(props){
    return(
        <div className="col">
            <div className="img-fluid">
                <Imagen url={props.url} alt={props.alt}/>
                <Descripcion descripcion={props.descripcion}></Descripcion>
            </div>
        </div>
    )
}

export default Galeria;