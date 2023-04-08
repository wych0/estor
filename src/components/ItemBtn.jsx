import Button from '@mui/material/Button';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

function ItemBtn() {
  const { user } = useContext(UserContext);
  const buttonStyle = {
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    color: 'white',
    fontSize: 23,
    maxWidth: '30px', 
    maxHeight: '30px', 
    minWidth: '30px', 
    minHeight: '30px',
    marginTop: '4px',
    display: user.auth ? 'flex' : 'none'
}
    return (
      <div>
        <Button variant="contained" sx={buttonStyle}><p className="icon">+</p></Button>
      </div>
    );
  }

  export default ItemBtn;