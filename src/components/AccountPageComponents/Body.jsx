import * as React from 'react'
import UserOrders from './UserOrders'
import OrderDetailsContainer from './OrderDetailsContainer'

export function Body() {
    return (
      <div className="bodyPage accPage flex wrap centerX">
        <UserOrders></UserOrders>
        <OrderDetailsContainer></OrderDetailsContainer>
      </div>
    );
  }
  