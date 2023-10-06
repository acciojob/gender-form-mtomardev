
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [gender, setGender] = useState("") 
  console.log(gender)
  return (
    <div>
        
        <form>
        <h2>Select your gender</h2>
        <input type="radio" 
        name="gender"
        value="Male" onChange={(e) => setGender(e.target.value)} />
        <label>Male</label>

        <input 
        type="radio"
        name="gender"
         value="Female" onChange={(e) => setGender(e.target.value)}/>
        <label>Female</label>
        </form>
        {
          gender == "Male" &&
          <div>
            <h2>Select your shirt size:</h2>
            <select>
              <option>Select your size:</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        }

{
          gender == "Female" &&
          <div>
            <h2>Select your dress size:</h2>
            <select>
              <option>Select size:</option>
              <option>2</option>
              <option>4</option>
              <option>6</option>
            </select>
          </div>
        }

    </div>
  )
}

export default App
