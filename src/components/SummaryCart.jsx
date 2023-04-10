import { React, useContext} from "react"
import { UserContext } from '../UserContext'
import ItemCart from './ItemCart'
import products from '../products.json'
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
    const filterData = filterProductsByCartItems(products, user.cart);
    const productsCost = calculateAllProductsCost(filterData);
    console.log(filterData);

    return (
      <div className="bodyCartContent">
        <div className="summaryCart shadow flex wrap">
          <div className ="list cartItems flex wrap">
            {filterData.length !== 0
            ? filterData.map((item) => (
              <div key={item.id} className="listItemCart"><ItemCart itemId={item.id} brand={item.brand} name={item.name} price={item.price}></ItemCart></div>
              ))
            : <p className="text emptyCart">Twój koszyk jest pusty</p>
            } 
          </div>
          <div className="calculationBox flex wrap">
            <CostSumBox cost={productsCost} text="Produkty"></CostSumBox>
            <CostSumBox cost="0" text="Dostawa"></CostSumBox>
          </div>
            
        </div>
      </div>
    );
  }
  
  export default SummaryCart;