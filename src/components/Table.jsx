import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Button } from '@mui/material';
import { TableCellCustom } from './TableCellCustom';
import { TableRowCustom } from './TableRowCustom';
import orders from '../orders.json'
import { UserContext } from '../UserContext';
import { useContext } from 'react';
 
const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '632px',
    minWidth: '632px',
    bgcolor: 'white',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    justifyContent: "center",
}

const tableStyle = {
    minWidth: '600px',
    maxWidth: '600px',
}

const btnStyle = {
    height: 35,
    width: 90,
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
    "@media (max-width:1600px)": {
      width: 375,
      marginTop: 1.5,
      marginBottom: 4,
    },
} 

function TableComp(){
    const {displayOrderDetails} = useContext(UserContext)
    return(
    <TableContainer sx={containerStyle}>
        <div className="box headerTab flex">
            <p className="text headerTab">Twoje zamówienia</p>
        </div>
      <Table sx={tableStyle} size="small" aria-label="a dense table">
            <TableHead>
            <TableRowCustom>
                <TableCellCustom align="center">Numer</TableCellCustom>
                <TableCellCustom align="center">Data</TableCellCustom>
                <TableCellCustom align="center">Koszt</TableCellCustom>
                <TableCellCustom align="center">Status</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowCustom>
            </TableHead>
            <TableBody>
            {orders.map((row) => (
                <TableRowCustom
                key={row.id}
                sx ={{'&:last-of-type': { border: 0 }, 
                '&:hover':{bgcolor: '#F5F5F5'},
                }}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.date}</TableCellCustom>
                <TableCellCustom align="center">{row.cost}</TableCellCustom>
                <TableCellCustom align="center">{row.status}</TableCellCustom>
                <TableCellCustom align="center"><Button variant="contained" sx={btnStyle} onClick={() => displayOrderDetails(row.id)}>Szczegóły</Button></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TableComp;
