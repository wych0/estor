import { React, useState, useContext} from "react";
import { UserContext } from '../UserContext';

export default function Cart() {
    const {user} = useContext(UserContext);
    console.log(user.auth + " z cart");
    return (
        <div>

            <p>CART PAGE</p>
        </div>
          
          
    );
}
