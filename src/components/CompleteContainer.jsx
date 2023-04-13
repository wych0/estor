import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';


const btnStyle = {
    marginTop: 3,
    marginBottom: 3,
    height: 50,
    width: 400,
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 16,
    fontWeight: "700",
    "@media (max-width:1600px)": {
      marginTop: 5,
      marginBottom: 2.5,
      height: 45,
      width: 300,
      fontSize: 13,
      fontWeight: "600",
    },
  } 

function CompleteContainer() {
    const {endOrderProcess} = useContext(UserContext);
    return (
      <div className="completeBox flex wrap centerX shadow">
        <i className="bi bi-check-circle-fill icon complete"></i>
        <p className="text complete big">Otrzymaliśmy twoje zamówienie</p>
        <p className="text complete small">Dziękujemy za korzystanie z naszych usług</p>
        <Link to={"/auth"}><Button variant="contained" sx={btnStyle} onClick={endOrderProcess}>Wróć do strony głównej</Button></Link>
        
      </div>
    );
  }
  
  export default CompleteContainer;