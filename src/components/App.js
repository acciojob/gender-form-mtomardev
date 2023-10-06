
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  
  return (
    <div>
        <h1>Select your gender</h1>
        <input type="radio" defaultChecked/>
        <label>Male</label>
        <input type="radio" />
        <label>Female</label>

    </div>
  )
}

export default App
