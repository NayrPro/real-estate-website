export default function TextError(props) {
    return (
        <span style={{fontSize: "0.8rem", fontStyle : "italic", color: "red"}}>
            {props.children}
        </span>
    )
}