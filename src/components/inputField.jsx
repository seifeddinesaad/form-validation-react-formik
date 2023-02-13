import React from "react";

const InputField = ({ name, value, onChange }) => {
  //   console.log(name, value, onChange);
  return (
    <>
      <label htmlFor={name}>{name}:</label>
      <input type={name} id={name} onChange={onChange} value={value} />
    </>
  );
};

export default InputField;
