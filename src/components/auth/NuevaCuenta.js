import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

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

    // password mínimo de 6 caracteres

    // Los 2 passwords sean iguales

    // pasarolo al action

}

    return(
    <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Crear Cuenta</h1>

            <form
                onSubmit={onSubmit}
            >
                <div className="campo-form">
                    <label htmlFor="nombre">Email</label>
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