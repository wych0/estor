import SummaryCart from "./SummaryCart"
import OrderDetails from './OrderDetails'

function BodyCart() {
    return (
      <div className="bodyCartPage flex wrap centerX">
        <OrderDetails></OrderDetails>
        <SummaryCart></SummaryCart>
      </div>
    );
  }
  
  export default BodyCart;