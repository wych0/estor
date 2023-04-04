import '../App.css';
import ShipInfo from '../components/ShipInfo'
import SearchField from './SearchField';
import Items from '../components/Items'

function BodyHome() {
    return (
        <div className="body home">
            <ShipInfo></ShipInfo>
            <SearchField></SearchField>
            <Items></Items>
        </div>
        
    );
  }
  
  export default BodyHome;