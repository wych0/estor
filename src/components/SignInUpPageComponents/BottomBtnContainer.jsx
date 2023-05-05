import {Link } from "react-router-dom"
import { BtnUnderForm } from "../Buttons"

export default function BottomBtnContainer(props) {
    return (
      <div className="boxBottomBtn flex wrap centerX">
        <div className="boxTextBottomBtn">
            <p className="text bottomBtn">{props.text}</p>
        </div>
        <BtnUnderForm component={Link} to={`../${props.route}`} variant="contained"> {props.btnText}</BtnUnderForm>
      </div>
    );
  }
