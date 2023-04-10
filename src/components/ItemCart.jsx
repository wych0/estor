import ItemBtn from '../components/ItemBtn'

function ItemCart(props) {
    return (
      <div className="boxItemCart flex wrap">
        <div className="boxImgCart shadow flex centerX centerY">
            <img className="imgItem" src="/images/products/product1.png" alt="produkt"/>
        </div>
        <p className="text itemCart brand">{props.brand}</p>
        <p className="text itemCart name">{props.name}</p>
        <p className="text itemCart price">{props.price}</p>
        <ItemBtn itemId={props.itemId}></ItemBtn>

        
      </div>
    );
  }
  
  export default ItemCart;