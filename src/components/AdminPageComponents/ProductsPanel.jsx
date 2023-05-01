import { AddProductForm } from "./AddProductForm"
import { TableItems } from "./TableItems"

export function ProductsPanel() {
    return (
      <div className="flex wrap pageContent adminPage adminProducts">
        <TableItems></TableItems>
        <AddProductForm></AddProductForm>
    </div>
    );
  }
