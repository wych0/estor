import '../App.css';

function Item() {
    return (
      <div className="boxItem">
        <div className="boxImg">
            <img className="imgItem" src="/images/products/product1.png" alt="produkt"/>
        </div>
        <p className="text item brand">Apple</p>
        <p className="text item name">IPhone 12 mini 256GB</p>
        <p className="text item price">3 200 zł</p>
      </div>
    );
  }
  
  export default Item;