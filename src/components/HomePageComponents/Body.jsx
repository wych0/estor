import InfoBox from './InfoBox'
import SearchField from './SearchField'
import Items from './Items'
import OrderInfo from './OrderInfo'
import { React, useState, useContext} from "react"
import { UserContext } from '../../UserContext'

export default function Body() {
    const {user} = useContext(UserContext);
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) =>{
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
        <div className="bodyPage homePage flex centerX wrap">
            <InfoBox text="shipInfo"></InfoBox>
            <SearchField onChangeFun={inputHandler}></SearchField>
            {user.auth
                ? <OrderInfo isDisplay="false"></OrderInfo>
                : <OrderInfo isDisplay="true"></OrderInfo>
            }
            
            <Items input={inputText}></Items>
        </div>
    );
  }
  