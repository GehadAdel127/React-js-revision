import { useState } from "react";

export default function Form() {
    // const [name , setName] = useState("")
    // const [email , setEmail] = useState("")

    // another way

    const [formInfo, setFormInfo] = useState({ name: "", email: "", age: "", generalInfo: "", isStudent: false, country: "", status: "" })
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log(formInfo.name, formInfo.email);
            }}>

                <label htmlFor="name">Name : </label>
                {/* <input type="text" name="name" id = "name" autoComplete="name" value={name} onChange={(event) => {setName(event.target.value)}}/> */}
                {/* the other way */}
                {/* <input type="text" name="name" id = "name" autoComplete="name" value={formInfo.name} onChange={(event) => {setFormInfo({name : event.target.value , email : formInfo.email})}}/> */}
                {/* the other way */}
                <input type="text" name="name" id="name" autoComplete="name" value={formInfo.name} onChange={(event) => { setFormInfo({ ...formInfo, name: event.target.value }) }} />
                <hr />
                <label htmlFor="email">Email : </label>
                {/* <input type="email" name="email" id = "email" autoComplete="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/> */}
                {/* the other way */}
                {/* <input type="email" name="email" id = "email" autoComplete="email" value={formInfo.email} onChange={(event) => {setFormInfo({name : formInfo.name,email : event.target.value})}}/> */}
                {/* the other way */}
                <input type="text" name="email" id="email" autoComplete="email" value={formInfo.email} onChange={(event) => { setFormInfo({ ...formInfo, email: event.target.value }) }} />
                <hr />
                <label htmlFor="age">Age : </label>
                <input type="text" name="age" autoComplete="age" id="age" value={formInfo.age} onChange={(event) => { { setFormInfo({ ...formInfo, age: event.target.value }) } }} />
                <hr />
                <label htmlFor="generalInfo">General info : </label>
                {/* <textarea name="generalInfo" id="generalInfo" onChange={(event) => { setFormInfo({ ...formInfo, generalInfo: event.target.value }) }}>{formInfo.generalInfo}</textarea> */}
                {/* the other way */}
                <textarea name="generalInfo" id="generalInfo" value={formInfo.generalInfo} onChange={(event) => { setFormInfo({ ...formInfo, generalInfo: event.target.value }) }} />
                <hr />
                <label htmlFor="isStudent">Are you student?</label>
                <input type="checkbox" name="isStudent" id="isStudent" checked={formInfo.isStudent} onChange={(event) => { setFormInfo({ ...formInfo, isStudent: event.target.checked }) }} />
                <hr />
                <select name="country" id="country" value={formInfo.country} onChange={(event) => { setFormInfo({ ...formInfo, country: event.target.value }) }}>
                    <option value="Egypt">Egypt</option>
                    <option value="KSA">KSA</option>
                    <option value="Syria">Syria</option>
                </select>
                <hr />
                <input type="radio" name="student" id="student" checked={formInfo.status == "student"} value="student" onChange={(event) => { setFormInfo({ ...formInfo, status: event.target.value }) }} />Student
                <input type="radio" name="teacher" id="teacher" checked={formInfo.status == "teacher"} value="teacher" onChange={(event) => { setFormInfo({ ...formInfo, status: event.target.value }) }} />Teacher
                <hr />
                <button>Submit</button>
            </form>
        </div>
    )
}