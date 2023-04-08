import {Link } from "react-router-dom";
import NavButton from './NavButton';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Button from '@mui/material/Button';

const btnLoginStyle = {
    height: 50,
    width: 190,
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 15,
    fontWeight: "700",
} 


function Header() {
    const { user, logout } = useContext(UserContext);
    return (
      <div className="header home">
        <div className="left headerContent">
          {user.auth
          ?  <Link to={"/"}><Button variant="contained" sx={btnLoginStyle} onClick={logout}>Wyloguj się</Button></Link>
          : <p className="text shipInfo free">Bezpłatna dostawa i zwrot!</p>
          }
        </div>
        
        <img src="images/logo.png" alt="logoImgHeader" className="logoImgHeader"/>
        <ul className="navigation home">
            <li><Link to='/cart'><NavButton className="bi bi-cart-fill"/></Link></li>
            <li><Link to={(user.auth ? '/auth' : '/')}><NavButton className="bi bi-house-fill"/></Link></li>
            <li><Link to='/account'><NavButton className="bi bi-person-fill"/></Link></li>
        </ul>
      </div>
    );
  }
  
  export default Header;