import * as React from 'react'
import UserOrders from './UserOrders'
import OrderDetails from './OrderDetails'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext'
import { getUserOrders } from '../../apiCalls/order.js'

export function Body() {
    const {user} = useContext(UserContext)
    const [userOrders, setUserOrders] = useState([])
    const [orderCancelled, setOrderCancelled] = useState(false)
    const onOrderCancel = ()=>{
      setOrderCancelled(true)
    }    

    useEffect(()=>{
      getUserOrders(user.id).then((orders)=>setUserOrders(orders))
  },[user.id, orderCancelled])

    return (
      <div className="bodyPage accPage flex wrap centerX">
        {userOrders.length===0
        ? <div className="box pageContent accPage orderDetails flex wrap shadow">
            <div className="box orderDetailsContent flex wrap centerX">
                <div className="box orderDetailsHeader header flex centerY">
                    <p className="text orderDetails header">Tutaj wyświetlane będą twoje zamówienia</p>
                </div>
                <div className="box displayAlertOrderDetails flex wrap centerX">
                    <i className="bi bi-info-circle-fill icon detailsBtn info"></i>
                    <p className="text detailsBtn info">Zachęcamy do złożenia twojego pierwszego zamówienia!</p>
                </div>
            </div>
          </div>
        :  <><UserOrders userOrders={userOrders}></UserOrders>
            <OrderDetails onOrderCancel={onOrderCancel}></OrderDetails></>
        }
      </div>
    );
  }
  