import { useState } from "react"
import "./Form.css"
import PopUp from "./PopUp"
const Form = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salary: "more than 5000"
    })
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState("")
    function validateForm(formInfo) {
        if (formInfo.name.trim() &&
            formInfo.phoneNumber.length >= 12 &&
            formInfo.phoneNumber.length <= 14 &&
            formInfo.age >= 18 &&
            formInfo.age < 100 &&
            formInfo.isEmployee &&
            formInfo.salary) {
            return true
        }
    }
    function handleSubmitClick(event) {
        const isValid = validateForm(formInfo)
        event.preventDefault()
        if (isValid) {
            setPopUpMessage("The form has been submmited Successfully!")
        } else if (!formInfo.name.trim()) {
            setPopUpMessage("The name should be enterd!")
        } else if (formInfo.phoneNumber.length < 12) {
            setPopUpMessage("The phone number should be between 12 numbers or 14 numbers!")
        } else if (formInfo.phoneNumber.length > 14) {
            setPopUpMessage("The phone number should be between 12 numbers or 14 numbers!")
        } else if (formInfo.age < 18 || formInfo.age > 100) {
            setPopUpMessage("The age should be between 18 and 100 years old!")
        } else if (!formInfo.isEmployee) {
            setPopUpMessage("You should tell us you're employee or not!")
        } else if (!formInfo.salary) {
            setPopUpMessage("We should know exactly you're salary!")
        }
        setShowPopUp(true)
    }
    return (
        <div>
            <form>
                <h1>Requesting a Loan</h1>
                <hr />
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" placeholder="Name" value={formInfo.name} onChange={(event) => { setFormInfo({ ...formInfo, name: event.target.value }) }} />

                <label htmlFor="phoneNumber">Phone Number : </label>
                <input type="number" id="phoneNumber" placeholder="Phone number" value={formInfo.phoneNumber} onChange={(event) => { setFormInfo({ ...formInfo, phoneNumber: event.target.value }) }} />

                <label htmlFor="age">Age : </label>
                <input type="number" id="age" placeholder="Age" value={formInfo.age} onChange={(event) => { setFormInfo({ ...formInfo, age: event.target.value }) }} />

                <label htmlFor="employee">Are you an Employee? </label>
                <input type="checkbox" id="employee" checked={formInfo.isEmployee} onChange={(event) => { setFormInfo({ ...formInfo, isEmployee: event.target.checked }) }} />

                <label htmlFor="salary">Salary : </label>
                <select name="salary" id="salary" value={formInfo.salary} onChange={(event) => { setFormInfo({ ...formInfo, salary: event.target.value }) }}  >
                    <option value="more than 5000">more than 5000</option>
                    <option value="more than 10000">more than 10000</option>
                    <option value="more than 15000">more than 15000</option>
                </select>

                <button type="submit" onClick={(e) => {
                    handleSubmitClick(e)
                }}>Submit</button>
            </form>
            {showPopUp && <PopUp message={popUpMessage} />}
        </div>
    )
}

export default Form