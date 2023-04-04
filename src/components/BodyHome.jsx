import '../App.css';
import ShipInfo from '../components/ShipInfo'
import SearchField from './SearchField';
import Items from '../components/Items'
import OrderInfo from '../components/OrderInfo'

function BodyHome() {
    return (
        <div className="body home">
            <ShipInfo></ShipInfo>
            <SearchField></SearchField>
            <OrderInfo></OrderInfo>
            <Items></Items>
        </div>
        
    );
  }
  
  export default BodyHome;