import React, { useRef } from "react";

const UnControlledForm = () => {
    const textRef = useRef("");
    const checkboxRef = useRef("");

    const handlSubmit = (event) => {
      event.preventDefault();
      alert(`Text: ${textRef.current.value}, Checked: ${checkboxRef.current.checked}`);
    };

     return (
       <form onSubmit={handlSubmit}>
         <label>
           Text:
           <input type="text" ref={textRef} />
         </label>
         <br />
         <label>
           Checkbox:
           <input type="checkbox" ref={checkboxRef} />
         </label>
         <button type="submit">Submit</button>
       </form>
     );
};

export default UnControlledForm;