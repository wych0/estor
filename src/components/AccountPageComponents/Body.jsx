import * as React from 'react'
import UserOrders from './UserOrders'
import OrderDetails from './OrderDetails'
import { useState } from 'react'

export function Body() {
    const [orderCancelled, setOrderCancelled] = useState(false)

    const handleOrderCancellation = ()=>{
      setOrderCancelled(true)
    }    
    return (
      <div className="bodyPage accPage flex wrap centerX">
        <UserOrders orderCancelled={orderCancelled}></UserOrders>
        <OrderDetails onOrderCancellation={handleOrderCancellation}></OrderDetails>
      </div>
    );
  }
  