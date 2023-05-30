import { useContext, useState, useEffect} from "react"
import { UserContext } from "../../UserContext"
import { ItemOrderDetails } from './ItemOrderDetails'
import { SmallBtn} from '../Buttons'
import { getOrder, cancelOrder } from '../../apiCalls/order.js'
import ConfirmationDialog from '../ConfirmationDialog'

export default function OrderDetails({onOrderCancel}){
    const [order, setOrder] = useState()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [buttonDisabled, setDisabled] = useState(null)
    const [orderStatus, setOrderStatus] = useState(null)
    const {user, setIsBlocked} = useContext(UserContext)

    useEffect(()=>{
        if(user.displayedOrder!==null){
            getOrder(user.displayedOrder).then((order)=>{
                setOrder(order)
                setOrderStatus(order.status)
                order.status==='W realizacji' ? setDisabled(false) : setDisabled(true)})
        }
    },[user.displayedOrder])

    if(!order) {
        return (
        <div className="box pageContent accPage orderDetails flex wrap shadow">
            <div className="box orderDetailsContent flex wrap centerX">
                <div className="box orderDetailsHeader header flex centerY">
                    <p className="text orderDetails header">Nie wybrano zamówienia</p>
                </div>
                <div className="box displayAlertOrderDetails flex wrap centerX">
                    <i className="bi bi-info-circle-fill icon detailsBtn info"></i>
                    <p className="text detailsBtn info">Aby wyświetlić szczegóły danego zamówienia, skorzystaj z przycisku "Szczegóły".</p>
                </div>
            </div>
        </div>
        )
    }

    const handleClickOpen = () => {
        setDialogOpen(true)
    }

    const handleClose = () => {
        setDialogOpen(false)
    }

    const handleSubmit = async () =>{
        try{
            await cancelOrder(order._id)
            setDisabled(true)
            setOrderStatus('Anulowane')
            onOrderCancel()
            setDialogOpen(false)
        } catch(error){
            if(error==='User blocked'){
                setIsBlocked(true)
              }
            if(error==='Order cancelled'){
                setDisabled(true)
                setOrderStatus('Anulowane')
                onOrderCancel()
                setDialogOpen(false)
            }
        }
    }
    return(
    <div className="box pageContent accPage orderDetails flex wrap shadow">
        <div className="box orderDetailsContent flex wrap centerX">
            <div className="box orderDetailsHeader header flex centerY">
                <p className="text orderDetails header">Szczegóły zamówienia</p>
                <SmallBtn variant="contained" disabled={buttonDisabled} onClick={handleClickOpen}>Anuluj</SmallBtn>
                <ConfirmationDialog
                    open={dialogOpen}
                    onClose={handleClose}
                    onConfirm={handleSubmit}
                    title="Czy na pewno chcesz anulować zamówienie?"
                    description="Anulowanie zamówienia jest akcją, której nie można cofnąć"
                />
            </div>
                <div className="box displayOrderDetails flex wrap">
                    <div className="box orderDetailsInfo flex wrap">
                        <p className="text orderDetails info">Numer: <span className="text orderDetails info data">{order._id}</span></p>
                        <p className="text orderDetails info">Data: <span className="text orderDetails info data">{order.date}</span></p>
                        <p className="text orderDetails info">Koszt: <span className="text orderDetails info data">{order.cost}</span></p>
                        <p className="text orderDetails info">Status: <span className="text orderDetails info data">{orderStatus}</span></p>
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
    </div>
    );
}
