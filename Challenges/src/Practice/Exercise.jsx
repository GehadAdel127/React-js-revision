import { useState } from "react"

const Exercise = () => {
  // const [value , setValue] = useState("")
  // function handleInputValue(event){
  //     setValue(event.target.value)
  const [devices, setDevices] = useState(["iPhone", "Samsung", "LG", "Mac"])
  const [inputValue, setInputValue] = useState("")
  const devicesList = devices.map((device, index) => {
    return (
      <li key={index}>{device}
        <button onClick={() => { handleDelete(index) }}>Delete</button>
        <button onClick={() => {
          const newName = prompt(devices[index])
          handleEdit(index, newName)
        }}>Edit</button>
      </li>
    )
  })
  function handleDelete(index) {
    devices.splice(index, 1)
    setDevices([...devices])
  }
  function handleEdit(index, newName) {
    const updateDevices = [...devices]
    if (newName != "") {
      updateDevices[index] = newName
      setDevices(updateDevices)
    }
  }
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