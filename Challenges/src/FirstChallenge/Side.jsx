import Button from './Button'
import "./Side.css"

const Side = () => {
    const buttonsArray = Array.from({length : 10})
  return (
    <div className={"side"}>
        {buttonsArray.map((_,index) => (
            <Button key={index} />
        ))}
    </div>
  )
}

export default Side