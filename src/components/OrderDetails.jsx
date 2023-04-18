import orders from '../orders.json'
import { useContext } from "react";
import { UserContext } from "../UserContext";
import products from '../products.json'
import ItemOrderDetails from './ItemOrderDetails';
import { Button } from '@mui/material';

const btnStyle = {
    height: '50%',
    width: '20%',
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
} 

function filterProductsByOrderItems(products, orderItems) {
    return products.filter((product) => orderItems.includes(product.id));
  }

function OrderDetails(props){
    const {user} = useContext(UserContext)
    const orderToDisplay = orders.find(el => el.id===user.displayedOrder);
    const isOrderChosen = props.isOrderChosen==='false' ? false : true
    const filterData = isOrderChosen ? filterProductsByOrderItems(products, orderToDisplay.products) : ' '
    return(
        <div className="box orderDetailsContent flex wrap centerX">
            <div className="box orderDetailsHeader header flex centerY">
                <p className="text orderDetails header">{ isOrderChosen ? 'Szczegóły zamówienia' : 'Nie wybrano zamówienia'}</p>
                {isOrderChosen ? <Button variant="contained" sx={btnStyle}>Anuluj</Button> : ' '}
            </div>
            <div className="box orderDetailsInfo flex wrap">
                <p className="text orderDetails info">Numer zamówienia: <span className="text orderDetails info data">{ isOrderChosen ? orderToDisplay.id : ' '}</span></p>
                <p className="text orderDetails info">Data zamówienia: <span className="text orderDetails info data">{ isOrderChosen ? orderToDisplay.date : ' '}</span></p>
                <p className="text orderDetails info">Koszt zamówienia: <span className="text orderDetails info data">{ isOrderChosen ? orderToDisplay.cost : ' '}</span></p>
                <p className="text orderDetails info">Status zamówienia: <span className="text orderDetails info data">{ isOrderChosen ? orderToDisplay.status : ' '}</span></p>
            </div>
            <div className ="orderDetailsItems flex wrap">
                {filterData===' '
                ? <p> </p>
                : filterData.map((item) => (
                    <div key={item.id} className="listItemCart"><ItemOrderDetails itemId={item.id} brand={item.brand} name={item.name} price={item.price}></ItemOrderDetails></div>
                    ))
                } 
            </div>
            
        </div>
        
    );
}

export default OrderDetails