import Button from '@mui/material/Button';

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
    marginTop: '10px',
}

function ItemBtn() {
    return (
      <div>
        <Button variant="contained" sx={buttonStyle}><p className="icon">+</p></Button>
      </div>
    );
  }

  export default ItemBtn;