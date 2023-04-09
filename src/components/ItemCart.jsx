import ItemBtn from '../components/ItemBtn'
import useStyles from '../styles';

function ItemCart(props) {
    const classes = useStyles()
    return (
      <div className={classes.boxItemCart}>
        <div className="boxImg shadow flex centerX centerY">
            <img className="imgItem" src="/images/products/product1.png" alt="produkt"/>
        </div>
        <p className="text item brand">{props.brand}</p>
        <p className="text item name">{props.name}</p>
        <div className="boxPriceBtn flex centerY">
          <p className="text item price">{props.price}</p>
          <ItemBtn itemId={props.itemId}></ItemBtn>
        </div>
        
      </div>
    );
  }
  
  export default ItemCart;