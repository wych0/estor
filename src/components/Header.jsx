import {Link } from "react-router-dom";
import NavButton from './NavButton';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function Header() {
    const { user } = useContext(UserContext);
    const routeCart = user.auth ? 'cart' : 'login'
    const routeHome = user.auth ? '/auth' : '/'
    const routeAcc = user.auth ? 'account' : 'login'
    return (
      <div className="header home">
        <p className="text shipInfo free">Bezpłatna dostawa i zwrot!</p>
        <img src="images/logo.png" alt="logoImgHeader" className="logoImgHeader"/>
        <ul className="navigation home">
            <li><Link to={routeCart}><NavButton className="bi bi-cart-fill"/></Link></li>
            <li><Link to={routeHome}><NavButton className="bi bi-house-fill"/></Link></li>
            <li><Link to={routeAcc}><NavButton className="bi bi-person-fill"/></Link></li>
        </ul>
      </div>
    );
  }
  
  export default Header;