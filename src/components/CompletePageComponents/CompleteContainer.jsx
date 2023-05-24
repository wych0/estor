import { Link } from "react-router-dom"
import { BigBtn } from '../Buttons'
import { useContext } from "react"
import { UserContext } from "../../UserContext"

export default function CompleteContainer() {
  const {setPlacedOrder} = useContext(UserContext)
  const handleClick = (e)=>{
    e.preventDefault()
    setPlacedOrder(false)
  }
    return (
      <div className="completeBox flex wrap centerX shadow">
        <i className="bi bi-check-circle-fill icon complete"></i>
        <p className="text complete big">Otrzymaliśmy twoje zamówienie</p>
        <p className="text complete small">Dziękujemy za korzystanie z naszych usług</p>
        <div className="completeBtn container flex centerX">
          <BigBtn component={Link} to={"/"} variant="contained" onClick={(e) => handleClick(e)}>Wróć do strony głównej</BigBtn>
        </div>
      </div>
    );
  }
  