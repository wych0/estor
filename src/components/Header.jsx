import {Link } from "react-router-dom"
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { MidBtn } from './Buttons'
import { NavButton } from "./NavButton"

function Header(props) {
    const { user, logout } = useContext(UserContext)
    const centerLogo = props.childDisplay === 'none' ? 'centerX' : 'spaceBetween'
    return (
      <div className={"headerContainer flex centerY " + centerLogo}>
        <div className={"left headerContent flex centerX "+props.childDisplay}>
          {user.auth
          ?  <Link to={"/"}><MidBtn variant="contained" onClick={logout}>Wyloguj się</MidBtn></Link>
          :  <p className="text shipInfo free">Bezpłatna dostawa i zwrot!</p>
          }
        </div>
        
        <img src="images/logoSvg.svg" alt="logoImgHeader" className="logoImgHeader"/>
        <ul className={"navigation flex centerX centerY " +props.childDisplay}>
            <li><Link to='/cart'><NavButton><i className="bi bi-cart-fill icon nav"></i></NavButton></Link></li>
            <li><Link to={(user.auth ? '/auth' : '/')}><NavButton><i className="bi bi-house-fill icon nav"></i></NavButton></Link></li>
            <li><Link to='/account'><NavButton><i className="bi bi-person-fill icon nav"></i></NavButton></Link></li>
        </ul>
      </div>
    );
  }
  
  export default Header;