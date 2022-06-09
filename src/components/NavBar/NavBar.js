import fox_icon from "../../img/fox-icon.png"
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <img className='nav--img' src={fox_icon} alt="Icon of a fox" />
            <h3 className='nav--icon-text text'>Kris' Portfolio</h3>
            <ul className='nav--links'>
                <li>About Me</li>
            </ul>
        </nav>
    )
}