import { useContext, useState, useEffect} from "react"
import { UserContext } from "../../UserContext"
import { ItemOrderDetails } from './ItemOrderDetails'
import { SmallBtn } from '../Buttons'
import { getOrder } from '../../apiCalls/order.js'

export function OrderDetails(props){
    const [order, setOrder] = useState()
    const {user} = useContext(UserContext)
    useEffect(()=>{
        getOrder(user.displayedOrder).then((order)=>setOrder(order))
    },[order, user.displayedOrder])
    if(!order) {
        return (
            <div className="box orderDetailsContent flex wrap centerX">
                <div className="box orderDetailsHeader header flex centerY">
                    <p className="text orderDetails header">Nie wybrano zamówienia</p>
                </div>
                <div className="box displayAlertOrderDetails flex wrap centerX">
                    <i className="bi bi-info-circle-fill icon detailsBtn info"></i>
                    <p className="text detailsBtn info">Aby wyświetlić szczegóły danego zamówienia, skorzystaj z przycisku "Szczegóły".</p>
                </div>
            </div>
        )
    }
    // const isBtnDisabled = orderToDisplay.status==="W realizacji" ? false : true
    return(
        <div className="box orderDetailsContent flex wrap centerX">
            <div className="box orderDetailsHeader header flex centerY">
                <p className="text orderDetails header">Szczegóły zamówienia</p>
                <SmallBtn variant="contained" disabled={false}>Anuluj</SmallBtn>
            </div>
                <div className="box displayOrderDetails flex wrap">
                    <div className="box orderDetailsInfo flex wrap">
                        <p className="text orderDetails info">Numer: <span className="text orderDetails info data">{order._id}</span></p>
                        <p className="text orderDetails info">Data: <span className="text orderDetails info data">{order.date}</span></p>
                        <p className="text orderDetails info">Koszt: <span className="text orderDetails info data">{order.cost}</span></p>
                        <p className="text orderDetails info">Status: <span className="text orderDetails info data">{order.status}</span></p>
                    </div>
                    <div className="box orderDetailsInfo flex wrap">
                        <p className="text orderDetails info">Adres dostawy</p>
                        <p className="text orderDetails info data address">{order.address.name.concat((' '), order.address.secName)}</p>
                        <p className="text orderDetails info data address">{order.address.street}</p>
                        <p className="text orderDetails info data address">{order.address.postalCode.concat((', '), order.address.city)}</p>
                        <p className="text orderDetails info data address">{order.address.country}</p>
                    </div>
                    <div className ="orderDetailsItems flex wrap">
                        <p className="text orderDetails info">Zamówione produkty</p>
                        {order.products.map((item) => (
                            <div key={item._id} className="listItemOrderDetails"><ItemOrderDetails brand={item.brand} name={item.name} price={item.price}></ItemOrderDetails></div>
                            ))}
                    
                    </div>
            </div> 
        </div>
    );
}
