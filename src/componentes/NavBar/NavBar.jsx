import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <img className='logoEsoterica'src={"./img/esoterica.png"} alt="logo esoterica" />
        <nav>
            <ul>
                <li> Inicio </li>
                <li> Mazos de Tarot </li>
                <li> Oráculos </li>
                <li> Protección </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar