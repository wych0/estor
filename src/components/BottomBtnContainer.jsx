import {Link } from "react-router-dom";
import { BtnUnderForm } from "./BtnUnderForm";

function BottomBtnContainer(props) {
    return (
      <div className="boxBottomBtn">
        <div className="boxTextBottomBtn flex centerY">
            <p className="text bottomBtn">{props.text}</p>
        </div>
        <Link to={`../${props.route}`}><BtnUnderForm variant="contained"> {props.btnText}</BtnUnderForm></Link>
      </div>
    );
  }
  
  export default BottomBtnContainer;