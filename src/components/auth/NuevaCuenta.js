import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function NuevaCuenta() {

  //State para iniciar sesion
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })

  //Extraer de usuario
  const {nombre, email, password, confirmar} = usuario

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  //Cuando el usuario quiere iniciar sesion
  const onSubmit = e => {
    e.preventDefault()

    //Validar que no haya campos vacios

    //Passwrod minimo de 6 caracteres


    //Los 2 passwords son iguales


    //Pasarlo al action
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener Cuenta</h1>
        <form
          onSubmit={onSubmit}
        >

          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input 
            type="text" 
            id="nombre"
            name="nombre"
            value={nombre}
            placeholder="Tu nombre" 
            onChange={onChange}/>
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email"
            name="email"
            value={email}
            placeholder="Tu Email" 
            onChange={onChange}/>
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password"
            name="password"
            value={password}
            placeholder="Tu password" 
            onChange={onChange}/>
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input 
            type="password" 
            id="confirmar"
            name="confirmar"
            value={confirmar}
            placeholder="Repite tu password" 
            onChange={onChange}/>
          </div>

          <div className="campo-form">
            <input type="submit" value="Registrar" className="btn btn-primario btn-block"/>
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">Volver a Iniciar Sesión</Link>
      </div>
    </div>
  )
}

export default NuevaCuenta