function Imagen(props){
    return (
        <img className="img-thumbnail"
         src={props.url} alt={props.alt}></img>
    );
}

export default Imagen;