import orders from '../orders.json'
import { useContext } from "react";
import { UserContext } from "../UserContext";

function OrderDetails(props) {
    const {user} = useContext(UserContext)
    return (
      <div className="box orderDetails flex wrap shadow">
        {user.displayedOrder==='none'  
            ? <p className="text orderDetails">Nie wybrano zamówienia do wyświetlena szczegółów</p>
            : <p className="text orderDetails">Szczegóły zamówienia nr. {user.displayedOrder}</p>
        }
        
        
      </div>
    );
  }
  
  export default OrderDetails