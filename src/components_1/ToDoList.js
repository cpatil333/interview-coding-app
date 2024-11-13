import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
  });
  const [todos, setTodos] = useState([]);

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue({
      name: "",
    });
  };

  const handleRemove = (index) => {
    const newItems = [...todos];
    newItems.splice(index, 1);
    setTodos(newItems);
  };

  return (
    <div>
      <h3>To-do-List</h3>
      <br />
      <input
        type="text"
        name="name"
        value={inputValue.name}
        placeholder="Enter Item"
        onChange={handleInputValue}
      />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <ul style={{ listStyle: "none" }}>
        {todos.length > 0 &&
          todos.map((item, index) => (
            <li key={index}>
              <span style={{ marginRight: "50px" }}>{item.name}</span>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ToDoList;
