import Button from '@mui/material/Button';
import {Link } from "react-router-dom";
import useStyles from '../styles';

function BottomBtn(props) {
  const classes = useStyles()
    return (
      <div className="boxBottomBtn">
        <div className="boxTextBottomBtn flex centerY">
            <p className="text bottomBtn">{props.text}</p>
        </div>
        <Link to={`../${props.route}`}><Button variant="contained" className={classes.btnBottom}>{props.btnText}</Button></Link>
      </div>
    );
  }
  
  export default BottomBtn;