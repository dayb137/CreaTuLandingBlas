import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <img src="" alt="" />
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