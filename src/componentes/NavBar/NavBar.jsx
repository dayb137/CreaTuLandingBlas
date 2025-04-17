import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className='Header'>
      <Link to="/">
        <img className='logoEsoterica'src={"./img/esoterica.png"} alt="logo esoterica" />
      </Link>
        <nav className='Nav'>
            <ul>
                <li> 
                  <NavLink className={"NavLink"} to ="/"> Inicio </NavLink>
                  </li>
                <li> 
                  <NavLink className={"NavLink"} to ="categoria/mazosTarot"> Mazos de Tarot </NavLink>   
                  </li>
                <li>
                  <NavLink className={"NavLink"} to ="categoria/oraculos"> Oráculos </NavLink>  
                  </li>
                <li>
                  <NavLink className={"NavLink"} to ="categoria/proteccion" >Protección</NavLink>  
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar