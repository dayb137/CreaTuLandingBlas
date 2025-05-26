import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img className='logoEsoterica'src={"./img/esoterica.png"} alt="logo esoterica" />
      </Link>
        <nav className='nav'>
            <ul>
                <li> 
                  <NavLink className={"navLink"} to ="/"> Inicio </NavLink>
                  </li>
                <li> 
                  <NavLink className={"navLink"} to ="categoria/mazosTarot"> Mazos de Tarot </NavLink>   
                  </li>
                <li>
                  <NavLink className={"navLink"} to ="categoria/oraculos"> Oráculos </NavLink>  
                  </li>
                <li>
                  <NavLink className={"navLink"} to ="categoria/proteccion" >Protección</NavLink>  
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar