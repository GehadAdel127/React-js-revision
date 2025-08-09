import "./Button.css"
const Button = ({title , children}) => {
  return (
    <button className="button">
        <h4>{title}</h4>
        {children}
    </button>
  )
}

export default Button