import React, { useState } from "react";

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    const error = validate({ [name]: value });
    setErrors({ ...errors, [name]: error[name] });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
 
    if (Object.keys(validationErrors).length === 0) {
      callback();  
    }
  };
  return { values, errors, handleChange, handleSubmit };
};

const FormValidation = () => {
  const initialValues = { username: "", email: "" };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validate
  );

  return (
    <form onSubmit={() => handleSubmit(values)}>
      <div>
        <label>Username</label>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
