import React from 'react'

function Login() {

  const onChange = () => {
    console.log('asd');
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email"
            name="email"
            placeholder="Tu Email" 
            onChange={onChange}/>
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password"
            name="password"
            placeholder="Tu password" 
            onChange={onChange}/>
          </div>

          <div className="campo-form">
            <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
