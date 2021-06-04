import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

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

    // pasarolo al action

}

    return(
    <div className="form-usuario">
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