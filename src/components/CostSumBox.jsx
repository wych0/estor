function CostSumBox(props) {
    return (
        <div className="boxTextSum flex wrap centerY">
            <p className="text sum CartLabel">{props.text}</p>
            <p className="text sum Cart">{props.cost} zł</p>
        </div>
    );
  }
  
  export default CostSumBox;