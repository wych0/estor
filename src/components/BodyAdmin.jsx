import { MenuBtnAdmin } from "./MenuBtnAdmin";
import { MidBtn } from "./MidBtn";
import { AdminIcon } from "./AdminIcon";
import { useState } from "react";
import { TableOrders } from "./AdminComponents/TableOrders";
import { TableUsers } from "./AdminComponents/TableUsers";
import { ProductsPanel } from "./AdminComponents/ProductsPanel";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function BodyAdmin() {
    const { logout } = useContext(UserContext);
    const [showContainer, setShowContainer] = useState(' ')
    const btnFun = (container) => {
        setShowContainer(container)
    }
    
    return (
      <div className="bodyAdminPage flex wrap centerX">
        <div className="menu adminPageContent flex centerY shadow">
            <AdminIcon />
            <MenuBtnAdmin onClick={btnFun.bind(this, 'users')}>Zarządzaj użytkownikami</MenuBtnAdmin>
            <MenuBtnAdmin onClick={btnFun.bind(this, 'orders')}>Zarządzaj zamówieniami</MenuBtnAdmin>
            <MenuBtnAdmin onClick={btnFun.bind(this, 'products')}>Zarządzaj produktami</MenuBtnAdmin>
            <Link to={"/"}><MidBtn sx={{marginTop: '5%'}} onClick={logout}>Wyloguj się</MidBtn></Link>
        </div>
        {showContainer==='orders' ? <TableOrders /> : ' '}
        {showContainer==='users' ? <TableUsers /> : ' '}
        {showContainer==='products' ? <ProductsPanel /> : ' '}
    </div>
    );
  }
  
  export default BodyAdmin;