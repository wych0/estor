export default function InfoBox(props) {
    const text = props.text==="shipInfo" ? "Złóż zamówienie do godziny 19, a paczkę wyślemy tego samego dnia!" : ""
    const icon = props.text==="shipInfo" ? "bi bi-rocket-takeoff-fill infoBoxRocket" : ""
    return (
      <div className="infoBox flex centerX">
        <div className="infoBoxContent shadow flex centerX">
          <i className={icon+" infoBoxIcon"}></i>
          <p className={"text infoBoxText "+props.text}>{text}</p>
        </div>
      </div>
    );
  }