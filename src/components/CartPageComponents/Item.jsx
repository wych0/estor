import ItemBtn from '../ItemBtn'

export default function Item(props) {
    return (
      <div className="boxItemCart flex wrap">
        <div className="boxImgCart shadow flex centerX centerY">
            <img className="imgItem" src={`http://localhost:8000/images/${props.image}`} alt="produkt"/>
        </div>
        <div className="boxBrandNameBtnCart flex wrap">
          <p className="text itemCart brand">{props.brand}</p>
          <p className="text itemCart name">{props.name}</p>
          <ItemBtn itemId={props.itemId}></ItemBtn>
        </div>
        <p className="text itemCart price">{props.price} zł</p>
      </div>
    );
}