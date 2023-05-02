export default function CostSumBox(props) {
    return (
        <div className={"boxTextSum flex centerY "}>
            <p className={"text sum CartLabel "+props.class}>{props.text}</p>
            <p className={"text sum Cart "+props.class}>{props.cost} zł</p>
        </div>
    )
}