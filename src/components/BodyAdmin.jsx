import { MenuBtnAdmin } from "./MenuBtnAdmin";
import { LogoutBtn } from "./LogoutBtn";
import { AdminIcon } from "./AdminIcon";
import { useState } from "react";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts"
import AllUsers from "./AllUsers"
import AddProductAdmin from "./AddProductAdmin"

function BodyAdmin() {
    const [showContainer, setShowContainer] = useState(' ')
    const btnFun = (container) => {
        setShowContainer(container)

    }
    return (
      <div className="bodyAdminPage flex wrap">
        <div className="menu adminPageContent flex centerY shadow">
            <AdminIcon />
            <MenuBtnAdmin onClick={btnFun.bind(this, 'users')}>Zarządzaj użytkownikami</MenuBtnAdmin>
            <MenuBtnAdmin onClick={btnFun.bind(this, 'orders')}>Zarządzaj zamówieniami</MenuBtnAdmin>
            <MenuBtnAdmin onClick={btnFun.bind(this, 'products')}>Zarządzaj produktami</MenuBtnAdmin>
            <LogoutBtn sx={{marginTop: '5%'}}>Wyloguj się</LogoutBtn>
        </div>
        {showContainer==='orders' ? <AllOrders /> : ' '}
        {showContainer==='users' ? <AllUsers /> : ' '}
        {showContainer==='products' 
        ? <div className="flex wrap adminProducts"><AllProducts /> <AddProductAdmin /></div>
        : ' '}
    </div>
    );
  }
  
  export default BodyAdmin;