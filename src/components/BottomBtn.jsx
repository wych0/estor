import Button from '@mui/material/Button';
import {Link } from "react-router-dom";

const btnStyle = {
    marginTop: 0.5,
    height: 50,
    width: 450,
    bgcolor: 'white',
    color: '#1A1882',
    border: 2,
    borderColor: '#1A1882',
    '&:hover':{
        bgcolor: '#1A1882',
        color: 'white',
    },
    fontSize: 16,
    fontWeight: "700",
} 


function BottomBtn(props) {
    return (
      <div className="boxBottomBtn">
        <div className="boxTextBottomBtn flex centerY">
            <p className="text bottomBtn">{props.text}</p>
        </div>
        <Link to={`../${props.route}`}><Button variant="contained" sx={btnStyle}>{props.btnText}</Button></Link>
      </div>
    );
  }
  
  export default BottomBtn;