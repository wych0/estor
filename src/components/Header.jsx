import {Link } from "react-router-dom";
import NavButton from './NavButton';

function Header() {
    return (
      <div className="header home">
        <p className="text shipInfo free">Bezpłatna dostawa i zwrot!</p>
        <img src="images/logo.png" alt="logoImg" className="logoImg"/>
        <ul className="navigation home">
            <li><Link to={'login'}><NavButton className="bi bi-cart-fill"/></Link></li>
            <li><Link to={'/'}><NavButton className="bi bi-house-fill"/></Link></li>
            <li><Link to={'login'}><NavButton className="bi bi-person-fill"/></Link></li>
        </ul>
      </div>
    );
  }
  
  export default Header;