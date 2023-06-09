import ItemBtn from '../ItemBtn'

export default function Item(props) {
    return (
      <div className="boxItem flex wrap">
        <div className="boxImg shadow flex centerX centerY">
            <img className="imgItem" src={`http://localhost:8000/images/${props.image}`} alt="produkt"/>
        </div>
        <p className="text item brand">{props.brand}</p>
        <p className="text item name">{props.name}</p>
        <div className="boxPriceBtn flex centerY">
          <p className="text item price">{props.price} zł</p>
          <ItemBtn itemId={props.itemId}></ItemBtn>
        </div>
        
      </div>
    );
  }
