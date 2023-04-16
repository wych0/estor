import SummaryCart from "./SummaryCart"
import ShipDetails from './ShipDetails'

function BodyCart() {
    return (
      <div className="bodyCartPage flex wrap centerX">
        <ShipDetails></ShipDetails>
        <SummaryCart></SummaryCart>
      </div>
    );
  }
  
  export default BodyCart;