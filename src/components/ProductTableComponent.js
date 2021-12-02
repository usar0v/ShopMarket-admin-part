import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {IMAGE_API_URL} from "../utils/settings";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import {deleteProduct, updateProduct} from "../store/actions/allProduct";
import {useDispatch} from "react-redux";
import Brightness1SharpIcon from '@mui/icons-material/Brightness1Sharp';

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables({products}) {
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper} style={{marginTop: 20}}>
      <Table sx={{minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ФОТО</StyledTableCell>
            <StyledTableCell>НАЗВАНИЕ</StyledTableCell>
            <StyledTableCell align="right">ЦЕНА</StyledTableCell>
            <StyledTableCell align="right">ЦВЕТА</StyledTableCell>
            <StyledTableCell align="right">РАЗМЕРЫ</StyledTableCell>
            <StyledTableCell align="right">АКТИВНОСТЬ</StyledTableCell>
            <StyledTableCell align="right">АКЦИИ</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length === 0 ? (
            <div className={'havent-product'}>
              <DoDisturbIcon fontSize={'large'}/>
            </div>
          ) : products.map((v, i) => (
            <StyledTableRow key={v.title}>
              <StyledTableCell component="th" scope="row">
                <div className={'product-image'} style={{backgroundImage: `url(${IMAGE_API_URL}${v.image})`}}></div>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {v.title}
              </StyledTableCell>
              <StyledTableCell align={'center'} component="th" scope="row">
                {v.price} <u>c</u>
              </StyledTableCell>
              <StyledTableCell align="right">
                {v.colors.map(y => (
                  <Brightness1SharpIcon style={{color: y}}/>
                ))}
              </StyledTableCell>
              <StyledTableCell align="right">
                {/*{ v.sizes.map(y => <b> {y}</b>)}*/}
              </StyledTableCell>
              <StyledTableCell color={v.status ? 'success' : 'error'} align="right">
                {v.status ? "Активный" : "Неактивный"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {!v.discount ?  <DoDisturbIcon style={{color: 'darkred'}}/> : <span style={{color: '#103425'}}>{`${v.discount}%`}</span>}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button color={'success'}>
                  <EditIcon/>
                </Button>
                <Button onClick={() => dispatch(deleteProduct(v.id))} color={'success'}>
                  <DeleteIcon color={'error'}/>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
