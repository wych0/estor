import { useState, useEffect } from 'react'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from '../TableComponents'
import { getUsers } from '../../apiCalls/user.js'

export function TableUsers(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getUsers().then((users)=>setUsers(users))
    },[])


    return(
    <div className="flex wrap pageContent adminPage">
    <TableContainer className="tableContainer users flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Użytkownicy</p>
        </div>
      <TableCustom size="small" aria-label="a dense table">
            <TableHead>
            <TableRowHead>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">E-mail</TableCellCustom>
                <TableCellCustom align="center">Status konta</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowHead>
            </TableHead>
            <TableBody>
            {users.map((row) => (
                <TableRowCustom
                key={row.id}
                >
                <TableCellCustom align="center">{row._id}</TableCellCustom>
                <TableCellCustom align="center">{row.email}</TableCellCustom>
                <TableCellCustom align="center">{row.isBlocked ? 'Zablokowane' : 'Aktywne'}</TableCellCustom>
                <TableCellCustom align="center"><TableBtn variant="contained">{row.isBlocked ? 'Odblokuj' : 'Zablokuj'}</TableBtn></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </TableCustom>
    </TableContainer>
    </div>
    );
}

