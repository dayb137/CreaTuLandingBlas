import React from 'react'
import {Link} from 'react-router-dom'


const Error404 = () => {
  return (
    <div>
        <h1>404</h1>
        <p> ¡Oops! La pagina esta en construccion...</p>
        <Link to="/">
         Volver a la pagina principal
        
        </Link>
    </div>
  )
}

export default Error404