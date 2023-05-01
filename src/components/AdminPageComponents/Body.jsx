import { BigBtn } from "../BigBtn";
import { MidBtn } from "../MidBtn";
import { AdminIcon } from "./Icon";
import { useState } from "react";
import { TableOrders } from "./TableOrders";
import { TableUsers } from "./TableUsers";
import { ProductsPanel } from "./ProductsPanel";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Body() {
    const { logout } = useContext(UserContext);
    const [showContainer, setShowContainer] = useState(' ')
    const btnFun = (container) => {
        setShowContainer(container)
    }
    
    return (
      <div className="bodyPage adminPage flex wrap centerX">
        <div className="menu pageContent adminPage flex centerY shadow">
            <AdminIcon />
            <BigBtn onClick={btnFun.bind(this, 'users')}>Zarządzaj użytkownikami</BigBtn>
            <BigBtn onClick={btnFun.bind(this, 'orders')}>Zarządzaj zamówieniami</BigBtn>
            <BigBtn onClick={btnFun.bind(this, 'products')}>Zarządzaj produktami</BigBtn>
            <Link to={"/"}><MidBtn sx={{marginTop: '5%'}} onClick={logout}>Wyloguj się</MidBtn></Link>
        </div>
        {showContainer==='orders' ? <TableOrders /> : ' '}
        {showContainer==='users' ? <TableUsers /> : ' '}
        {showContainer==='products' ? <ProductsPanel /> : ' '}
    </div>
    );
  }
