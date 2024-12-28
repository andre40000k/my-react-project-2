import React, { useState } from "react";

const ControlledForm = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const handlSubmit = (event) => {
    event.preventDefault();
    console.log("Submit data:", { text, checked });
  };

  return (
    <form onSubmit={handlSubmit}>
      <label>
        Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <br />
      <label>
        ChackBox:
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm
