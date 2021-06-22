import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    // Extraer los valores del context
const alertaContext = useContext(AlertaContext);
const {alerta, mostrarAlerta} = alertaContext;

const authContext = useContext(AuthContext);
const {mensaje, autenticado, iniciarSesion} = authContext;

// En caso de que el usuario o contraseña no existan
useEffect(()=>{

    if(autenticado){
        props.history.push('/proyectos');
    }

    if(mensaje){
        mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

},[mensaje, autenticado, props.history]);


// State local para iniciar sesión

const [usuario, setUsuario] = useState({
    email:'',
    password:''
});

const {email, password} = usuario;

const onChange = e => {
    setUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
}

const onSubmit = e => {
    e.preventDefault();

    // validar que no hayan campos vacios
    if(email.trim() === '' || password.trim() === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        return;
    }

    // pasarolo al action
    iniciarSesion({email, password});

}

    return(
    <div className="form-usuario">
    {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
        <div className="contenedor-form sombra-dark">
            <h1>Iniciar sesión</h1>

            <form
                onSubmit={onSubmit}
            >
                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Introduce Tu Email"
                        onChange={onChange}
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Introduce Tu password"
                        onChange={onChange}
                    />
                </div>

                <div className="campo-form">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Iniciar sesión"
                    />
                </div>
            </form>
            <Link to={'/nueva-cuenta'} className="enlace-cuenta">Crear Cuenta</Link>
        </div>
    </div>
    )
} 
 
export default Login;