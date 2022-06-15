import { useState } from "react";

function CreateHolidayForm() {
  const [name, setName] = useState("");

  const handleClick = () => {
    console.log("Click working", name);
    fetch("/api/holidays/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <fieldset>
      <legend>Add</legend>
      <label htmlFor="holiday">Name</label>
      <input
        id="holiday"
        name="holiday"
        value = {name}
        onChange={(event) => setName(event.target.value)}
      />
      <button disabled={name.length===0}onClick={handleClick}>Add a reason to celebrate</button>
    </fieldset>
  );
}

export default CreateHolidayForm;
