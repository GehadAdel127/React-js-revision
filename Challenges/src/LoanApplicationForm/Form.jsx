import { useState } from "react"
import "./Form.css"
import PopUp from "./PopUp"
const Form = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salary: ""
    })
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState("")
    function validateForm(info) {
        return (
            info.name.trim() &&
            info.phoneNumber.length >= 10 &&
            info.phoneNumber.length <= 14 &&
            Number(info.age) >= 18 &&
            Number(info.age) < 100 &&
            info.isEmployee &&
            info.salary
        )
    }
    function handleSubmitClick(event) {
        event.preventDefault()
        const isValid = validateForm(formInfo)

        if (isValid) {
            setPopUpMessage("The form has been submitted successfully!")
        } else {
            if (!formInfo.name.trim()) {
                setPopUpMessage("The name should be entered!")
            } else if (
                formInfo.phoneNumber.length < 10 ||
                formInfo.phoneNumber.length > 14
            ) {
                setPopUpMessage("The phone number should be between 10 and 14 digits!")
            } else if (
                Number(formInfo.age) < 18 ||
                Number(formInfo.age) > 100
            ) {
                setPopUpMessage("The age should be between 18 and 100 years old!")
            } else if (!formInfo.isEmployee) {
                setPopUpMessage("Please let us know whether you're an employee.")
            } else if (!formInfo.salary) {
                setPopUpMessage("Please select your salary.")
            }
        }

        setShowPopUp(true)
    }
    function handleShowPopUp() {
        if (showPopUp) {
            setShowPopUp(false)
        }
    }
    return (
        <div onClick={handleShowPopUp}>
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
                    <option value="">-- Select Salary --</option>
                    <option value="more than 5000">more than 5000</option>
                    <option value="more than 10000">more than 10000</option>
                    <option value="more than 15000">more than 15000</option>
                </select>

                <button type="submit" className={validateForm(formInfo) ? "" : "disabled"}
                    disabled={!validateForm(formInfo)} onClick={(e) => {
                        handleSubmitClick(e)
                    }}>Submit</button>
            </form>
            {showPopUp && <PopUp message={popUpMessage} />}
        </div>
    )
}

export default Form