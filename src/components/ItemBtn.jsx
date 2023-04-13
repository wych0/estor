import Button from '@mui/material/Button';
import { useContext} from 'react';
import { UserContext } from '../UserContext';

function ItemBtn(props) {
  const {user, addItemToCart, deleteItemFromCart} = useContext(UserContext);
  const cartItemsIds = user.cart.map((item) => item.id);
  const btnFunction = cartItemsIds.includes(props.itemId) ? 'delete' : 'add';
  const icon = btnFunction==='add' ? 'bi bi-cart-plus-fill' : 'bi bi-cart-dash-fill';
  const text = btnFunction==='add' ? 'Dodaj' : 'Usuń'

  const handleClick = () => {
    const product = {id: props.itemId, name: `Produkt ${props.itemId}`}
    cartItemsIds.includes(props.itemId) ? deleteItemFromCart(props.itemId) : addItemToCart(product)
  }

  const btnItemStyle = {
    color: btnFunction === 'add' ? 'black' : 'black',
    '&:hover':{
        color: btnFunction === 'add' ? 'black' : 'black',
    },
    maxHeight: '20px',
    maxWidth: '60px',
    minHeight: '20px',
    minWidth: '60px',
    fontSize: 12,
    display: user.auth ? 'flex' : 'none',
    textTransform: 'none',
    "@media (max-width:1600px)": {
      fontSize: 11,
    },
  }

    return (
      <div>
        <Button onClick={handleClick} sx={btnItemStyle}>
          <i className={icon+" icon itemBtn"}></i>
          {text}
        </Button>
      </div>
    );
  }

  export default ItemBtn;