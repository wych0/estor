import SummaryCart from "./SummaryCart"
import ShipDetailsForm from './ShipDetailsForm'

export function Body() {
    return (
      <div className="bodyPage cartPage flex wrap centerX">
        <ShipDetailsForm></ShipDetailsForm>
        <SummaryCart></SummaryCart>
      </div>
    )
}
  
