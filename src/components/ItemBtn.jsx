import Button from '@mui/material/Button';
import { useContext} from 'react';
import { UserContext } from '../UserContext';

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

  
    return (
      <div>
        {user.auth 
        ? <Button onClick={handleClick} sx={btnItemStyle}><i className={icon+" icon itemBtn"}></i>{text}</Button> 
        : ' '}
      </div>
    );
  }

  export default ItemBtn;