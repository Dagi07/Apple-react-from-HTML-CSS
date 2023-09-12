import './CSS/header.css'
import logo from "./images/icons/logo.png";
import searchicon from "./images/icons/search-icon.png"
import cart from "./images/icons/cart.png"

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#"><img src={logo} alt="" /></a>
                    </li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Support</a></li>
                    <li>
                        <a href="#"><img src={searchicon} alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src={cart} alt="" /></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header