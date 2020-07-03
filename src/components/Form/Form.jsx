import React, { useState } from "react";

import "./Form.css";

function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [address, setAddress] = useState("");
  // const [birthday, setBirthday] = useState("");
  // const [gender, setGender] = useState("");
  // const [skill1, setSkill1] = useState("");
  // const [skill2, setSkill2] = useState("");
  // const [skill3, setSkill3] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    birthday: "",
    gender: "",
    skills: [],
  });

  const handleChange = (event) => {
    let value = event.target.value;
   
    if (event.target.name === "skills") {
      if (event.target.checked) {
        setData({
          ...data,
          skills: [...data.skills, event.target.value],
        });
      } else {
        setData({
          ...data,
          skills: data.skills.filter((skill) => skill !== value),
        });
      }
    } else {
      setData({
        ...data,
        [event.target.name]: value,
      });
    }
  };

  function handleSubmit() {
    alert(
      `Nama: ${data.name} \n Email: ${data.email}\n Password: ${data.password} \n Address: ${data.address} \n BirthDate: ${data.birthday}\n Gender: ${data.gender}\n Skill: ${data.skills}`
    );
  }
  return (
    <div className="container">
      <form className="container-form" onSubmit={handleSubmit}>
        <h1> Form Registration</h1>
        <div className="input-form">
          <input
            onChange={handleChange}
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            value={data.name}
          />

          <input
            onChange={handleChange}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={data.email}
          />

          <input
            onChange={handleChange}
            placeholder="Password"
            type="password"
            name="password"
            value={data.password}
            id="password"
          />
        </div>
        <div>
          <textarea
            onChange={handleChange}
            placeholder="Address"
            name="address"
            id="address"
            cols="30"
            rows="10"
            value={data.address}
          ></textarea>
        </div>
        <div>
          <input
            className="input-form"
            onChange={handleChange}
            placeholder="Birth Date"
            type="date"
            name="birthday"
            id="birthday"
            value={data.birthday}
          />
        </div>
        <div>
          <input
            className="input-radio"
            onChange={handleChange}
            type="radio"
            name="gender"
            id="gender1"
            value="Male"
          />
          Male
          <input
            className="input-radio"
            onChange={handleChange}
            type="radio"
            name="gender"
            id="gender2"
            value="Female"
          />
          Female
        </div>

        <div className="input-checkbox">
          <input
            onChange={handleChange}
            type="checkbox"
            name="skills"
            id="checkbox1"
            value="Coding"
          />
          Coding
          <input
            onChange={handleChange}
            type="checkbox"
            name="skills"
            id="checkbox2"
            value="Design"
          />
          Design
          <input
            onChange={handleChange}
            type="checkbox"
            name="skills"
            id="checkbox3"
            value="Gaming"
          />
          Gaming
        </div>

        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default Form;
