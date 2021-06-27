import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {

// Extraer los valores del context
const alertaContext = useContext(AlertaContext);
const {alerta, mostrarAlerta} = alertaContext;

const authContext = useContext(AuthContext);
const {mensaje, autenticado, registrarUsuario} = authContext;

// En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
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
    nombre:'',
    email:'',
    password:'',
    confirmar:''
});

const {nombre, email, password, confirmar} = usuario;

const onChange = e => {
    setUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
}

const onSubmit = e => {
    e.preventDefault();

    // validar que no hayan campos vacios
    if(
        nombre.trim() === '' || 
        email.trim() === '' ||
        password.trim() === '' ||
        confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

    // password mínimo de 6 caracteres
    if(password.length < 6){
        mostrarAlerta('La contraseña debe tener al menos 6 caracteres', 'alerta-error');
        return;
    }

    // Los 2 passwords sean iguales
    if(password !== confirmar){
        mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
        return;
    }

    // pasarlo al action
    registrarUsuario({
        nombre, 
        email, 
        password
    });

}

    return(
    <div className="form-usuario">
        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
        <div className="contenedor-form sombra-dark">
            <h1>Crear Cuenta</h1>

            <form
                onSubmit={onSubmit}
            >
                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        placeholder="Introduce Nombre"
                        onChange={onChange}
                    />
                </div>
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
                    <label htmlFor="confirmar">Repite password</label>
                    <input 
                        type="password"
                        name="confirmar"
                        id="confirmar"
                        value={confirmar}
                        placeholder="Repite Tu password"
                        onChange={onChange}
                    />
                </div>

                <div className="campo-form">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrarme"
                    />
                </div>
            </form>
            <Link to={'/'} className="enlace-cuenta">Login</Link>
        </div>
    </div>
    )
} 
 
export default NuevaCuenta;