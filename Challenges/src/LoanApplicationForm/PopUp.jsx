import "./PopUp.css"
const PopUp = ({ message }) => {
    return (
        <div className="popUp">
            <div className="PopUpContent">
                <h2>{message}</h2>
            </div>
        </div>
    )
}

export default PopUp