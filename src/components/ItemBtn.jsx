import Button from '@mui/material/Button';
import { useContext} from 'react';
import { UserContext } from '../UserContext';

function ItemBtn(props) {
  const {user, addItemToCart, deleteItemFromCart} = useContext(UserContext);
  const cartItemsIds = user.cart.map((item) => item.id);
  const btnFunction = cartItemsIds.includes(props.itemId) ? 'delete' : 'add';
  const icon = btnFunction==='add' ? '+' : '-';

  const handleClick = () => {
    const product = {id: props.itemId, name: `Produkt ${props.itemId}`}
    cartItemsIds.includes(props.itemId) ? deleteItemFromCart(props.itemId) : addItemToCart(product)
  }

  const buttonStyle = {
    bgcolor: btnFunction === 'add' ? '#1A1882' : '#D21312',
    '&:hover':{
        bgcolor: btnFunction === 'add' ? '#283593' : '#ED2B2A',
    },
    color: 'white',
    fontSize: 23,
    maxWidth: '30px', 
    maxHeight: '30px', 
    minWidth: '30px', 
    minHeight: '30px',
    display: user.auth ? 'flex' : 'none'
}
    return (
      <div>
        <Button onClick={handleClick} variant="contained" sx={buttonStyle}><p className="icon">{icon}</p></Button>
      </div>
    );
  }

  export default ItemBtn;