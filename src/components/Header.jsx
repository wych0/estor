import {Link } from "react-router-dom"
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { MidBtn, NavButton } from './Buttons'
import { logout } from "../apiCalls/auth"

export default function Header(props) {
    const { user, logoutUser} = useContext(UserContext)
    const centerLogo = props.childDisplay === 'none' ? 'centerX' : 'spaceBetween'

    const onClick = (async() => {
      try{
        const result = await logout()
        logoutUser()
        console.log(result.message)
      } catch(error) {
        console.log(error)
      }
    })

    return (
      <div className={"headerContainer flex centerY " + centerLogo}>
        <div className={"headerContent flex centerX "+props.childDisplay}>
          {user.auth
          ?  <Link to={"/"}><MidBtn variant="contained" onClick={onClick}>Wyloguj się</MidBtn></Link>
          :  <p className="text shipInfo free">Bezpłatna dostawa i zwrot!</p>
          }
        </div>
        
        <img src="images/logoSvg.svg" alt="logoImgHeader" className="logoImgHeader"/>
        <ul className={"headerContent navigation flex centerX centerY " +props.childDisplay}>
            <NavButton component={Link} to='/cart'><i className="bi bi-cart-fill icon nav"></i></NavButton>
            <NavButton component={Link} to='/'><i className="bi bi-house-fill icon nav"></i></NavButton>
            <NavButton component={Link} to='/account'><i className="bi bi-person-fill icon nav"></i></NavButton>
        </ul>
      </div>
    );
  }