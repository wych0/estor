import { MenuBtnAdmin } from "./MenuBtnAdmin";
import { MidBtn } from "./MidBtn";
import { AdminIcon } from "./AdminIcon";
import { useState } from "react";
import AllOrders from "./AllOrders";
import AllUsers from "./AllUsers"
import ProductsPanelAdmin from "./ProductsPanelAdmin";
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
        {showContainer==='orders' ? <AllOrders /> : ' '}
        {showContainer==='users' ? <AllUsers /> : ' '}
        {showContainer==='products' ? <ProductsPanelAdmin /> : ' '}
    </div>
    );
  }
  
  export default BodyAdmin;