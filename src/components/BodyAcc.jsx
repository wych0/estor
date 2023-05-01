import * as React from 'react';
import UserOrders from './UserOrders';
import OrderDetailsContainer from './OrderDetailsContainer';

function BodyAcc() {
    return (
      <div className="bodyPage accPage flex wrap centerX">
        <UserOrders></UserOrders>
        <OrderDetailsContainer></OrderDetailsContainer>
      </div>
    );
  }
  
  export default BodyAcc;