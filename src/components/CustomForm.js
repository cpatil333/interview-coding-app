import React, { useState } from "react";

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
const CustomForm = () => {
  const nameInput = useFormInput();

  return <div>
    <form>
        <input type="text" {...nameInput} placeholder="Enter Name" />
        <button type="submit">Submit</button>
    </form>
  </div>;
};

export default CustomForm;
