import { useState, useEffect } from 'react'
import { getProducts, deleteProduct } from '../../apiCalls/product.js'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from '../TableComponents'
import ConfirmationDialog from '../ConfirmationDialog'

export function TableItems({productAdded, setProductAdded}){
    const [products, setProducts] = useState([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [productID, setProductID] = useState(null)
    useEffect(()=>{
        getProducts().then((products)=>setProducts(products))
    },[])

    useEffect(()=>{
        getProducts().then((products)=>setProducts(products))
        setProductAdded(false)
    },[productAdded, setProductAdded])

    const handleClickOpen = (productID) => {
        setProductID(productID)
        setDialogOpen(true)
    }
    
    const handleSubmit = async () => {
        try{
            await deleteProduct(productID)
            getProducts().then((products)=>setProducts(products))
        } catch(error){
            getProducts().then((products)=>setProducts(products))
        }
    }

    const handleClose = () => {
        setDialogOpen(false)
    }


    return(
    <TableContainer className="tableContainer products flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Produkty</p>
        </div>
      <TableCustom size="small" aria-label="a dense table">
            <TableHead>
            <TableRowHead>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">Marka</TableCellCustom>
                <TableCellCustom align="center">Nazwa</TableCellCustom>
                <TableCellCustom align="center">Cena</TableCellCustom>
                <TableCellCustom align="center">Status</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowHead>
            </TableHead>
            <TableBody>
            {products.map((row) => (
                <TableRowCustom
                key={row._id}
                >
                <TableCellCustom align="center">{row._id.slice(15)}</TableCellCustom>
                <TableCellCustom align="center">{row.brand}</TableCellCustom>
                <TableCellCustom align="center">{row.name}</TableCellCustom>
                <TableCellCustom align="center">{row.price}</TableCellCustom>
                <TableCellCustom align="center">{row.isSold ? 'Sprzedany' : 'Dostępny'}</TableCellCustom>
                <TableCellCustom align="center"><TableBtn onClick={()=>handleClickOpen(row._id)} variant="contained">Usuń</TableBtn></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </TableCustom>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={handleClose}
        onConfirm={handleSubmit}
        title="Czy na pewno chcesz usunąć produkt?"
        description="Usunięcie produktu jest akcją, której nie można cofnąć"
        />
    </TableContainer>
    );
}
