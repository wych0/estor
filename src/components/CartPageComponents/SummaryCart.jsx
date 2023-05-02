import { React, useContext} from "react"
import { UserContext } from '../../UserContext'
import Item from './Item'
import data from '../../data.js'
import CostSumBox from "./CostSumBox"

function filterProductsByCartItems(products, cartItems) {
  const cartItemsIds = cartItems.map((item) => item.id);
  return products.filter((product) => cartItemsIds.includes(product.id));
}

function calculateAllProductsCost(cartItems){
  const cartItemsPrices = cartItems.map((item) => item.price)
  return cartItemsPrices.reduce((acc, curr) => acc+parseInt(curr), 0)
}

function SummaryCart() {
    const {user} = useContext(UserContext)
    const filterData = filterProductsByCartItems(data.products, user.cart);
    const productsCost = calculateAllProductsCost(filterData);

    return (
      <div className="pageContent cartPage">
        <div className="summaryCart shadow flex wrap">
            <div className="summaryCartListContainer flex wrap">
            {filterData.length !== 0
            ? filterData.map((item) => (
              <div className ="list cartItems flex wrap">
              <div key={item.id} className="listItemCart"><Item itemId={item.id} brand={item.brand} name={item.name} price={item.price}></Item></div>
              </div>
              ))
            : <p className="text summaryCartHeaders">Twój koszyk jest pusty</p>
            } 
            </div>
          
          <CostSumBox cost={productsCost} text="Produkty"></CostSumBox>
          <CostSumBox cost="0" text="Dostawa"></CostSumBox>
          <CostSumBox cost={productsCost + 0} text="Łącznie" class="total"></CostSumBox>

            
            
        </div>
      </div>
    );
  }
  
  export default SummaryCart;