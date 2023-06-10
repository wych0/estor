import {Link } from "react-router-dom"
import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { MidBtn, NavButton, TextButton, SmallBtn} from './Buttons'
import { logout } from "../apiCalls/auth"
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material"
import { TableBtn } from "./TableComponents"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const btnItemStyle = {
  color: 'black',
  height: '20px',
  width: '60px',
  fontSize: 12,
  textTransform: 'none',
  "@media (max-width:1600px)": {
    fontSize: 11,
  },
}

export default function Header(props) {
    const { user, logoutUser} = useContext(UserContext)
    const centerLogo = props.childDisplay === 'none' ? 'centerX' : 'spaceBetween'

    const onClick = (async() => {
      try{
        await logout()
        logoutUser()
      } catch(error) {
      }
    })

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div className={"headerContainer flex centerY " + centerLogo}>
        <div className={"headerContent flex centerX "+props.childDisplay}>
          {user.auth
          ?  <Link to={"/"}><MidBtn variant="contained" onClick={onClick}>Wyloguj się</MidBtn></Link>
          :  <p className="text shipInfo free">Bezpłatna dostawa i zwrot!</p>
          }
        </div>
          <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
              Pomoc
            </BootstrapDialogTitle>
            <DialogContent dividers>

              <Typography gutterBottom>
                <b>Dodawanie produktu do koszyka</b> <br />
                Aby dodać produkt do koszyka należy się zalogować, a następnie skorzystać z przycisku <Button sx={btnItemStyle}><i className="bi bi-cart-plus-fill icon itemBtn"></i>Dodaj</Button> 
                &nbsp;pod produktami. 
              </Typography>
              <br />
              <Typography gutterBottom>
                <b>Usuwanie produktu z koszyka</b> <br />
                Aby usunąć produkt z koszyka należy skorzystać z przycisku <Button sx={btnItemStyle}><i className="bi bi-cart-dash-fill icon itemBtn"></i>Usuń</Button> 
                &nbsp;pod produktami dodanymi do koszyka, produkty można również usuwać z poziomu koszyka.
              </Typography>
              <br />
              <Typography gutterBottom>
                <b>Składanie zamówienia</b> <br />
                Aby móc złożyć zamówienie należy być zalogowanym oraz dodać conajmniej jeden produkt do koszyka. <br />Zamówienie można złożyć
                z poziomu koszyka - <NavButton component={Link} to='/cart'><i className="bi bi-cart-fill icon nav"></i></NavButton>
              </Typography>
              <br />
              <Typography gutterBottom>
                <b>Historia zamówień</b> <br />
                Aby móc przejrzeć historię zamówień należy być zalogowanym oraz złożyć conajmniej jedno zamówienie. <br /> 
                Historię zamówień można przejrzeć z poziomu konta użytkownika - <NavButton component={Link} to='/account'><i className="bi bi-person-fill icon nav"></i></NavButton>
              </Typography>
              <br />
              <Typography gutterBottom>
                <b>Powrót na stronę główną</b> <br />
                W przypadku ekranu logowania należy kliknąć logo sklepu znajdujące się nad formularzem. <br />
                Przycisk z nawigacji służący do powrotu na stronę główną - <NavButton component={Link} to='/'><i className="bi bi-house-fill icon nav"></i></NavButton><br />
              </Typography>
              <br />
              <Typography gutterBottom>
                <b>Anulowanie zamówienia</b> <br />
                Aby anulować zamówienie należy być zalogowanym oraz złożyć conajmniej jedno zamówienie, będąc na poziomie historii swoich zamówień należy 
                skorzystać z przycisku &nbsp;<TableBtn>szczegóły</TableBtn> zamówienia, które chcemy anulować, kliknięcie przycisku spowoduje wyświetlenie szczegółów zamówienia oraz przycisku 
                &nbsp;<SmallBtn>Anuluj</SmallBtn> do anulowania zamówienia.
                
              </Typography>

            </DialogContent>
        </BootstrapDialog>
        <img src="images/logoSvg.svg" alt="logoImgHeader" className="logoImgHeader"/>
        <ul className={"headerContent navigation flex centerX centerY " +props.childDisplay}>
            <TextButton onClick={handleClickOpen} variant="text">Pomoc</TextButton>
            <NavButton component={Link} to='/cart'><i className="bi bi-cart-fill icon nav"></i></NavButton>
            <NavButton component={Link} to='/'><i className="bi bi-house-fill icon nav"></i></NavButton>
            <NavButton component={Link} to='/account'><i className="bi bi-person-fill icon nav"></i></NavButton>
        </ul>
      </div>
    );
  }