import ItemBtn from '../components/ItemBtn'

function Item(props) {
    return (
      <div className="boxItem">
        <div className="boxImg shadow">
            <img className="imgItem" src="/images/products/product1.png" alt="produkt"/>
        </div>
        <p className="text item brand">{props.brand}</p>
        <p className="text item name">{props.name}</p>
        <p className="text item price">{props.price}</p>
        <ItemBtn itemId={props.itemId}></ItemBtn>
      </div>
    );
  }
  
  export default Item;