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
        ? <div className="box pageContent accPage noOrder flex wrap shadow centerX">
            <div className="box orderDetailsHeader header flex centerY">
              <p className="text header noOrder">Tutaj będą wyświetlane twoje zamówienia</p>
            </div>
            <p className="text info">Zachęcamy do złożenia pierwszego zamówienia!</p>
          </div>
        :  <><UserOrders userOrders={userOrders}></UserOrders>
            <OrderDetails onOrderCancel={onOrderCancel}></OrderDetails></>
        }
      </div>
    );
  }
  