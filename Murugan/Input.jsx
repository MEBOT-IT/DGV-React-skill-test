import React, { useState } from "react";

const Input = () => {
  var [name, setName] = useState("");
  var submit = () => {
    console.log(`Hi ${name}`);
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Input;
