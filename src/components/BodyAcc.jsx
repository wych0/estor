import * as React from 'react';
import Table from './Table';
import OrderDetails from './OrderDetails';

function BodyAcc() {
    return (
      <div className="bodyAccPage flex wrap centerX">
        <Table></Table>
        <OrderDetails></OrderDetails>
      </div>
    );
  }
  
  export default BodyAcc;