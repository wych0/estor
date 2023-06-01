import { AddProductForm } from "./AddProductForm"
import { TableItems } from "./TableItems"
import { useState } from "react"

export function ProductsPanel() {
    const [productAdded, setProductAdded] = useState(false)
      const onProductAdd = ()=>{
        setProductAdded(true)
      }    
    return (
      <div className="flex wrap pageContent adminPage adminProducts">
        <TableItems productAdded={productAdded} setProductAdded={setProductAdded}></TableItems>
        <AddProductForm onProductAdd={onProductAdd}></AddProductForm>
    </div>
    );
  }
