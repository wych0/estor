import { React, useContext} from "react";
import { UserContext } from '../UserContext';
import Item from '../components/Item'
import products from '../products.json'

function filterProductsByCartItems(products, cartItems) {
    const cartItemsIds = cartItems.map((item) => item.id);
    return products.filter((product) => cartItemsIds.includes(product.id));
}

export default function Cart() {
    const {user} = useContext(UserContext)
    const filterData = filterProductsByCartItems(products, user.cart);
    return (
        <div className ="shadow box cartItems">
            {filterData.map((item) => (
            <li key={item.id} className="listItem"><Item itemId={item.id} brand={item.brand} name={item.name} price={item.price}></Item></li>
            ))}
            
        </div>
          
          
    );
}
