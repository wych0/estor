import SummaryCart from "./SummaryCart"
import ShipDetails from './ShipDetails'

function BodyCart() {
    return (
      <div className="bodyPage cartPage flex wrap centerX">
        <ShipDetails></ShipDetails>
        <SummaryCart></SummaryCart>
      </div>
    );
  }
  
  export default BodyCart;