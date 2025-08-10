import { useState } from "react"

const Exercise = () => {
    const [value , setValue] = useState("")
    function handleInputValue(event){
        setValue(event.target.value)
    }
  return (
    <div>
        <input value={value} onChange={handleInputValue} />
    </div>
  )
}

export default Exercise