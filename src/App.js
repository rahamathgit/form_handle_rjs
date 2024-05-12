import React, { useState } from "react";
import "./app.css";

const App = () => {

const [user, setUser] = useState({
    name: "Rahamathulla",
    age: 29,
    gender: "Male",
    isMarried: false,
    country:"India",
});

function updateValues(e){
    const name = e.target.name;
    const value = e.target.type === "checked" ? e.target.checked : e.target.value;
    setUser({...user, [name]: value});
};

    return(
        <div className="container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>{user.isMarried ? "Married" : "Not Married"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
            </table>
            <form>
                <div className="input-field">
                    <input type="text" placeholder="Full Name..." name="name" value={user.name} onChange={updateValues}/>
                    <input type="number" placeholder="Enter Age..." name="age" value={user.age} onChange={updateValues}/>
                </div>
                <div className="radio-field">
                    <label>
                    <input type="radio" name="gender" checked={user.gender === "Male"} value="Male" onChange={updateValues}/>Male
                    </label>
                    <label>
                    <input type="radio" name="gender" checked={user.gender === "Female"} value="Female" onChange={updateValues}/>Female
                    </label>
                </div>
                <div className="check-field">
                    <label>
                        <input type="checkbox" name="isMarried" checked={user.isMarried} onChange={updateValues}/>Is Married
                    </label>
                </div>
                <div className="cities">
                    <label>Select Country
                        <select name="country" value={user.country} onChange={updateValues}>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Germany">Germany</option>
                            <option value="China">China</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Russia">Russia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdoms">United Kingdoms</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default App;