import {Link } from "react-router-dom";
import { BottomBtn } from "./BottomBtn";

function BottomBtnContainer(props) {
    return (
      <div className="boxBottomBtn">
        <div className="boxTextBottomBtn flex centerY">
            <p className="text bottomBtn">{props.text}</p>
        </div>
        <Link to={`../${props.route}`}><BottomBtn variant="contained"> {props.btnText}</BottomBtn></Link>
      </div>
    );
  }
  
  export default BottomBtnContainer;