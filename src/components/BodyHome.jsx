import ShipInfo from '../components/ShipInfo'
import SearchField from './SearchField';
import Items from '../components/Items'
import OrderInfo from '../components/OrderInfo'
import { React, useState} from "react";

function BodyHome() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) =>{
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
        <div className="body home">
            <ShipInfo></ShipInfo>
            <SearchField onChangeFun={inputHandler}></SearchField>
            <OrderInfo></OrderInfo>
            <Items input={inputText}></Items>
        </div>
    );
  }
  
  export default BodyHome;