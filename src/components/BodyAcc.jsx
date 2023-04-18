import * as React from 'react';
import Table from './Table';
import OrderDetailsContainer from './OrderDetailsContainer';

function BodyAcc() {
    return (
      <div className="bodyAccPage flex wrap centerX">
        <Table></Table>
        <OrderDetailsContainer></OrderDetailsContainer>
      </div>
    );
  }
  
  export default BodyAcc;