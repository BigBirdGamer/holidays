import React from "react";
import Navbar from "../components/Navbar";
import {useState} from "react"

function Master() {
    const [holiday, setHoliday] = ("");

    const handleClick = () =>{
        setHoliday = name
    }
  return (
    <div>
      <Navbar />
      <h1>Holidays! Celebrate!</h1>
      <form onSubmit={handleClick} method="post">
        <fieldset>
          <input type="text" placeholder="Name" name="uname" required />
          <button type="submit">Add a reason to celebrate</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Master;
