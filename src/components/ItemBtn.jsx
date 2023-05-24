import Button from '@mui/material/Button'
import { useContext, useState, useEffect} from 'react'
import { UserContext } from '../UserContext'
import { addItem, deleteItem} from '../apiCalls/cart'

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

  export default function ItemBtn(props) {
  const {user, setCart} = useContext(UserContext)
  const [btnFunction, setFunction] = useState('add')
  const icon = btnFunction==='add' ? 'bi bi-cart-plus-fill' : 'bi bi-cart-dash-fill'
  const text = btnFunction==='add' ? 'Dodaj' : 'Usuń'

  const handleClick = () => {
    if(btnFunction==='add'){
      addItem(props.itemId).then((product)=>{
      setCart([...user.cart, product])
      setFunction('delete')
    })}else{
      deleteItem(props.itemId).then(()=>{
        const updatedCart = user.cart.filter((item)=>item._id !== props.itemId)
        setCart(updatedCart)
        setFunction('add')
      })
    }
  }

  useEffect(() => {
    user.cart.some((item) => item._id === props.itemId) ? setFunction('delete') : setFunction('add')
  }, [user.cart, props.itemId])

    return (
      <div>
        {user.auth 
        ? <Button onClick={handleClick} sx={btnItemStyle}><i className={icon+" icon itemBtn"}></i>{text}</Button> 
        : ' '}
      </div>
    );
  }
