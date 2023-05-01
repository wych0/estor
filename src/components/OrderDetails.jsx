import data from '../data.js'
import { useContext } from "react"
import { UserContext } from "../UserContext"
import ItemOrderDetails from './ItemOrderDetails'
import { SmallBtn } from './Buttons'

function filterProductsByOrderItems(products, orderItems) {
    return products.filter((product) => orderItems.includes(product.id));
  }

function OrderDetails(props){
    const {user} = useContext(UserContext)
    const orderToDisplay = data.orders.find(el => el.id===user.displayedOrder)
    const isOrderChosen = props.isOrderChosen==='false' ? false : true
    if(!isOrderChosen) {
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
    const filterData = filterProductsByOrderItems(data.products, orderToDisplay.products)
    const isBtnDisabled = orderToDisplay.status==="W realizacji" ? false : true
    return(
        <div className="box orderDetailsContent flex wrap centerX">
            <div className="box orderDetailsHeader header flex centerY">
                <p className="text orderDetails header">Szczegóły zamówienia</p>
                <SmallBtn variant="contained" disabled={isBtnDisabled}>Anuluj</SmallBtn>
            </div>
                <div className="box displayOrderDetails flex wrap">
                    <div className="box orderDetailsInfo flex wrap">
                        <p className="text orderDetails info">Numer: <span className="text orderDetails info data">{orderToDisplay.id}</span></p>
                        <p className="text orderDetails info">Data: <span className="text orderDetails info data">{orderToDisplay.date}</span></p>
                        <p className="text orderDetails info">Koszt: <span className="text orderDetails info data">{orderToDisplay.cost}</span></p>
                        <p className="text orderDetails info">Status: <span className="text orderDetails info data">{orderToDisplay.status}</span></p>
                    </div>
                    <div className="box orderDetailsInfo flex wrap">
                        <p className="text orderDetails info">Adres dostawy</p>
                        <p className="text orderDetails info data address">{orderToDisplay.addres.name.concat((' '), orderToDisplay.addres.secName)}</p>
                        <p className="text orderDetails info data address">{orderToDisplay.addres.street}</p>
                        <p className="text orderDetails info data address">{orderToDisplay.addres.postalCode.concat((', '), orderToDisplay.addres.city)}</p>
                        <p className="text orderDetails info data address">{orderToDisplay.addres.country}</p>
                    </div>
                    <div className ="orderDetailsItems flex wrap">
                        <p className="text orderDetails info">Zamówione produkty</p>
                        {filterData===' '
                        ? <p> </p>
                        : filterData.map((item) => (
                            <div key={item.id} className="listItemOrderDetails"><ItemOrderDetails itemId={item.id} brand={item.brand} name={item.name} price={item.price}></ItemOrderDetails></div>
                            ))
                        } 
                    </div>
            </div> 
        </div>
    );
}

export default OrderDetails