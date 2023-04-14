import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Button } from '@mui/material';
import { TableCellCustom } from './TableCellCustom';
import { TableRowCustom } from './TableRowCustom';

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData(1111111, '13.04.2023', 6400, 'W realizacji'),
    createData(1111111, '13.04.2023', 6400, 'W realizacji'),
    createData(1111111, '13.04.2023', 6400, 'W realizacji'),
    createData(1111111, '13.04.2023', 6400, 'W realizacji'),
    createData(1111111, '13.04.2023', 6400, 'W realizacji'),
    createData(1111111, '13.04.2023', 6400, 'W realizacji'),
    createData(1111111, '13.04.2023', 6400, 'W realizacji'),

  ];

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    mt: 10,
    bgcolor: 'white',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    justifyContent: "center",
}

const tableStyle = {
    maxWidth: '950px',
}

const btnStyle = {
    height: 30,
    width: 75,
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
            {rows.map((row) => (
                <TableRowCustom
                key={row.name}
                sx ={{'&:last-of-type': { border: 0 }, 
                '&:hover':{bgcolor: '#F5F5F5'},
                }}
                >
                <TableCellCustom align="center">{row.name}</TableCellCustom>
                <TableCellCustom align="center">{row.calories}</TableCellCustom>
                <TableCellCustom align="center">{row.fat}</TableCellCustom>
                <TableCellCustom align="center">{row.carbs}</TableCellCustom>
                <TableCellCustom align="center"><Button variant="contained" sx={btnStyle}>Anuluj</Button></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TableComp;
