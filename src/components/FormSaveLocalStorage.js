import React, { useEffect, useState } from "react";

const FormSaveLocalStorage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: 0,
    city: "",
  });

  const [displayValue, setDisplayValue] = useState({
    name: "",
    age: 0,
    city: "",
  });

  useEffect(() => {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const city = localStorage.getItem("city");
    setDisplayValue({
      name: JSON.parse(name),
      age: JSON.parse(age),
      city: JSON.parse(city),
    });
  },[]);

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmitform = (e) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(inputValue.name));
    localStorage.setItem("age", JSON.stringify(inputValue.age));
    localStorage.setItem("city", JSON.stringify(inputValue.city));
    alert("Name saved to local storage!");
  };

  return (
    <div>
      <form onSubmit={handleSubmitform}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={inputValue.name}
            onChange={handleInputValue}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={inputValue.age}
            onChange={handleInputValue}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={inputValue.city}
            onChange={handleInputValue}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div>
        <h2>Name : {displayValue.name}</h2>
        <h2>Age : {displayValue.age}</h2>
        <h2>City : {displayValue.city}</h2>
      </div>
    </div>
  );
};

export default FormSaveLocalStorage;
