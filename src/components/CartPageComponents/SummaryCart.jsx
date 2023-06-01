import { React, useContext} from "react"
import { UserContext } from '../../UserContext'
import Item from './Item'
import CostSumBox from "./CostSumBox"

function calculateAllProductsCost(cartItems){
  const cartItemsPrices = cartItems.map((item) => item.price)
  return cartItemsPrices.reduce((acc, curr) => acc+parseInt(curr), 0)
}

function SummaryCart() {
    const {user} = useContext(UserContext)
    const productsCost = calculateAllProductsCost(user.cart)
    return (
      <div className="pageContent cartPage">
        <div className="summaryCart shadow flex wrap">
            <div className="summaryCartListContainer flex wrap">
            <div  className ="list cartItems flex wrap">
            {user.cart.length !== 0
            ? user.cart.map((item) => (
              <div key={item._id} className="listItemCart"><Item itemId={item._id} brand={item.brand} name={item.name} price={item.price} image={item.image}></Item></div>
              ))
            : <p className="text summaryCartHeaders">Twój koszyk jest pusty</p>
            } 
            </div>
            </div>
          
          <CostSumBox cost={productsCost} text="Produkty"></CostSumBox>
          <CostSumBox cost="0" text="Dostawa"></CostSumBox>
          <CostSumBox cost={productsCost + 0} text="Łącznie" class="total"></CostSumBox>
            
        </div>
      </div>
    );
  }
  
  export default SummaryCart;