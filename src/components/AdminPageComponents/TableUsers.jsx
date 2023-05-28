import { useState, useEffect } from 'react'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from '../TableComponents'
import { getUsers, blockUser } from '../../apiCalls/user.js'

export function TableUsers(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getUsers().then((users)=>setUsers(users))
    },[])

    const handleClick = (userID, accountStatus) => {
        if(accountStatus==='Aktywne'){
            blockUser(userID).then(()=>getUsers().then((users)=>setUsers(users)))
        }else if(accountStatus==='Zablokowane'){
            
        }
      }

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
                key={row._id}
                >
                <TableCellCustom align="center">{row._id}</TableCellCustom>
                <TableCellCustom align="center">{row.email}</TableCellCustom>
                <TableCellCustom align="center">{row.accountStatus}</TableCellCustom>
                <TableCellCustom align="center"><TableBtn onClick={()=>handleClick(row._id, row.accountStatus)} variant="contained">{row.accountStatus==='Zablokowane' ? 'Odblokuj' : 'Zablokuj'}</TableBtn></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </TableCustom>
    </TableContainer>
    </div>
    );
}

