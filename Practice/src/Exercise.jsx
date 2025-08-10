import { useState } from "react"

const Exercise = () => {
  // const [value , setValue] = useState("")
  // function handleInputValue(event){
  //     setValue(event.target.value)
  const [devices, setDevices] = useState(["iPhone", "Samsung", "LG", "Mac"])
  const [inputValue, setInputValue] = useState("")
  const devicesList = devices.map((device) => {
    return (
      <li>{device}</li>
    )
  })
  return (
    <div>
      <ul>{devicesList}</ul>
      <input type="text" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} />
      <button onClick={() => { setDevices([...devices, inputValue]) }}>Add device</button>
      {/* <input value={value} onChange={handleInputValue} /> */}
    </div>
  )
}

export default Exercise