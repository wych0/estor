export function ItemOrderDetails(props) {
    return (
      <div className="boxItemOrderDetails flex wrap">
        <div className="boxImgOrderDetails shadow flex centerX centerY">
            <img className="imgItem" src={`http://localhost:8000/images/${props.image}`} alt="produkt"/>
        </div>
        <div className="boxItemOrderDetailsProps flex wrap">
          <p className="text itemOrderDetails brand">{props.brand}</p>
          <p className="text itemOrderDetails name">{props.name}</p>
          <p className="text itemOrderDetails price">{props.price} zł</p>
        </div>
      </div>
    );
  }
  