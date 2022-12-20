import { useForm } from "react-hook-form";
import './formu.css'
const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            nombre  : '',
            comentario : ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    

    return <div>
        <br/>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div >
                <label>Nombre </label>
                <br/>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div>
                <label>Email </label>
                <br/>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            
            <div>
                <label>Comentario</label>
                <br/>
                <input type="text" {...register('comentario', {
                    required: true
                })} />
            </div>
           
            <input type="submit" value="Enviar" />
        </form>
    </div>
}

export default Formulario;