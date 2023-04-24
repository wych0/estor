
import AddProductAdmin from "./AddProductAdmin";
import AllProducts from "./AllProducts";

function ProductsPanelAdmin() {
    return (
      <div className="flex wrap adminPageContent adminProducts centerX">
        <AllProducts></AllProducts>
        <AddProductAdmin></AddProductAdmin>
    </div>
    );
  }
  
  export default ProductsPanelAdmin;