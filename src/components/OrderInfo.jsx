function OrderInfo(props) {
    return (
        <div className="box orderInfo">
            {props.isDisplay==='true'
                ? <p className="text orderInfo"><i className="bi bi-info-circle-fill"></i><br></br> Pamiętaj, że aby złożyć zamówienie musisz być zalogowany.</p>
                : <p className="text orderInfo">&nbsp;<br />&nbsp;</p>
            }
        </div>
    );
  }
  
  export default OrderInfo;

