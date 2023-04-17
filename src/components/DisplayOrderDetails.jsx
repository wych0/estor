import orders from '../orders.json'
import { useContext } from "react";
import { UserContext } from "../UserContext";
import products from '../products.json'
import ItemOrderDetails from './ItemOrderDetails';

function filterProductsByOrderItems(products, orderItems) {
    return products.filter((product) => orderItems.includes(product.id));
  }


function DisplayOrder(props){
    const {user} = useContext(UserContext)
    const orderToDisplay = orders.find(el => el.id===user.displayedOrder);
    const isOrderChosen = props.isOrderChosen==='false' ? false : true
    const filterData = isOrderChosen ? filterProductsByOrderItems(products, orderToDisplay.products) : ' '
    return(
        <div className="box orderDetailsContent flex wrap">
            {!isOrderChosen
            ? <p className="text orderDetails">Nie wybrano zamówienia</p>
            : <p className="text orderDetails">Szczegóły zamówienia nr. {orderToDisplay.id}</p>
            }
            <p className="text orderDetails info">Data zamówienia: { isOrderChosen ? orderToDisplay.date : ' '}</p>
            <p className="text orderDetails info">Koszt zamówienia: { isOrderChosen ? orderToDisplay.cost : ' '}</p>
            <p className="text orderDetails info">Status zamówienia: { isOrderChosen ? orderToDisplay.status : ' '}</p>
            {filterData===' '
            ? <p> </p>
            : filterData.map((item) => (
                <div key={item.id} className="listItemCart"><ItemOrderDetails itemId={item.id} brand={item.brand} name={item.name} price={item.price}></ItemOrderDetails></div>
                ))
            } 
        </div>
        
    );
}

export default DisplayOrder