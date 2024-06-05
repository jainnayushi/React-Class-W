import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    hobbies: {
      reading: false,
      traveling: false,
      coding: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        hobbies: {
          ...formData.hobbies,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("TrinaData", formData);
  };

  return (
    <div className="App">
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        <div className="form-group">
          <label>Hobbies:</label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formData.hobbies.reading}
              onChange={handleChange}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="traveling"
              checked={formData.hobbies.traveling}
              onChange={handleChange}
            />
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={true}
              onChange={handleChange}
            />
            Coding
          </label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
