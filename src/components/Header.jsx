import {Link } from "react-router-dom";
import NavButton from './NavButton';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Button from '@mui/material/Button';
import useStyles from '../styles';

function Header() {
    const classes = useStyles()
    const { user, logout } = useContext(UserContext);
    return (
      <div className="header flex spaceBetween centerY">
          <div className="left headerContent flex centerX">
          {user.auth
          ?  <Link to={"/"}><Button variant="contained" className={classes.btnLogout} onClick={logout}>Wyloguj się</Button></Link>
          : <p className="text shipInfo free">Bezpłatna dostawa i zwrot!</p>
          }
        </div>
        
        <img src="images/logo.png" alt="logoImgHeader" className="logoImgHeader"/>
        <ul className="navigation flex centerX centerY">
            <li><Link to='/cart'><NavButton className="bi bi-cart-fill"/></Link></li>
            <li><Link to={(user.auth ? '/auth' : '/')}><NavButton className="bi bi-house-fill"/></Link></li>
            <li><Link to='/account'><NavButton className="bi bi-person-fill"/></Link></li>
        </ul>
      </div>
    );
  }
  
  export default Header;