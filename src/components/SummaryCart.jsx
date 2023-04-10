import { React, useContext} from "react"
import { UserContext } from '../UserContext'
import ItemCart from './ItemCart'
import products from '../products.json'

function filterProductsByCartItems(products, cartItems) {
  const cartItemsIds = cartItems.map((item) => item.id);
  return products.filter((product) => cartItemsIds.includes(product.id));
}

function SummaryCart() {
    const {user} = useContext(UserContext)
    const filterData = filterProductsByCartItems(products, user.cart);
    return (
      <div className="bodyCartContent summaryCart shadow flex">
        <div className ="list cartItems flex wrap centerX">
            {filterData.map((item) => (
            <li key={item.id} className="listItemCart"><ItemCart itemId={item.id} brand={item.brand} name={item.name} price={item.price}></ItemCart></li>
            ))}
        </div>
      </div>
    );
  }
  
  export default SummaryCart;