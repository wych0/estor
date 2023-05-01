import { useContext } from "react";
import { UserContext } from "../UserContext";
import OrderDetails from './OrderDetails';

function OrderDetailsContainer() {
    const {user} = useContext(UserContext)
    return (
      <div className="box accContent orderDetails flex wrap shadow">
        {user.displayedOrder==='none'  
            ? <OrderDetails isOrderChosen='false'/>
            : <OrderDetails isOrderChosen='true'/>
        }
      </div>
    );
  }
  
  export default OrderDetailsContainer