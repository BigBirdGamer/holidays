import React from "react";
import Navbar from "../components/Navbar";

function Master() {
  return (
    <div>
      <Navbar />
      <h1>Holidays! Celebrate!</h1>
      <fieldset>
        <form action="" method="post">
          <input type="text" placeholder="Name" name="uname" required />
          <button type="submit">Add a reason to celebrate</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Master;
