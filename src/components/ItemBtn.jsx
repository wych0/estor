import Button from '@mui/material/Button';
import { useContext} from 'react';
import { UserContext } from '../UserContext';
import useStyles from '../styles';

function ItemBtn(props) {
  const classes = useStyles()
  const {user, addItemToCart, deleteItemFromCart} = useContext(UserContext);
  const cartItemsIds = user.cart.map((item) => item.id);
  const btnFunction = cartItemsIds.includes(props.itemId) ? 'delete' : 'add';
  const icon = btnFunction==='add' ? 'bi bi-cart-plus-fill' : 'bi bi-cart-dash-fill';

  const handleClick = () => {
    const product = {id: props.itemId, name: `Produkt ${props.itemId}`}
    cartItemsIds.includes(props.itemId) ? deleteItemFromCart(props.itemId) : addItemToCart(product)
  }

  const btnItemStyle = {
    bgcolor: btnFunction === 'add' ? '#1A1882' : '#da0000',
    '&:hover':{
        bgcolor: btnFunction === 'add' ? '#283593' : '#ff0000',
    },
    color: 'white',
    fontSize: 23,
    maxWidth: '35px', 
    maxHeight: '35px', 
    minWidth: '35px', 
    minHeight: '35px',
    marginTop: '4px',
    display: user.auth ? 'flex' : 'none'
  }

    return (
      <div>
        <Button onClick={handleClick} variant="contained" sx={btnItemStyle}><i className={icon+" icon"}></i></Button>
      </div>
    );
  }

  export default ItemBtn;