import { useContext } from "react";
import { UserContext } from "../UserContext";
import DisplayOrder from './DisplayOrderDetails';

function OrderDetails(props) {
    const {user} = useContext(UserContext)
    return (
      <div className="box orderDetails flex wrap shadow">
        {user.displayedOrder==='none'  
            ? <DisplayOrder isOrderChosen='false'/>
            : <DisplayOrder isOrderChosen='true'/>
        }
      </div>
    );
  }
  
  export default OrderDetails