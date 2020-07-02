import React, { useState } from "react";

import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");

  function handleSubmit() {
    alert(
      `Nama: ${name} \n Email: ${email}\n Password: ${password} \n Address: ${address} \n BirthDate: ${birthday}\n Gender: ${gender}\n Skill: ${skill1},${skill2},${skill3}`
    );
  }
  return (
    <div className="container">
      <form className="container-form" onSubmit={handleSubmit}>
        <h1> Form Registration</h1>
        <div>
          <input
            className="input-form"
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </div>
        <div>
          <input
            className="input-form"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={email}
          />
        </div>
        <div>
          <input
            className="input-form"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={email}
          />
        </div>
        <div>
          <input
            className="input-form"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            id="password"
          />
        </div>
        <div>
          <textarea
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Address"
            name="address"
            id="address"
            cols="30"
            rows="10"
            value={address}
          ></textarea>
        </div>
        <div>
          <input
            className="input-form"
            onChange={(event) => setBirthday(event.target.value)}
            placeholder="Birth Date"
            type="date"
            name="birthDate"
            id="birthday"
            value={birthday}
          />
        </div>
        <div>
          <input
            className="input-radio"
            onChange={(event) => setGender(event.target.value)}
            type="radio"
            name="gender"
            id="gender1"
            value="Male"
          />
          Male
          <input
            className="input-radio"
            onChange={(event) => setGender(event.target.value)}
            type="radio"
            name="gender"
            id="gender2"
            value="Female"
          />
          Female
        </div>

        <div>
          <input
            className="input-checkbox"
            onChange={(event) => setSkill1(event.target.value)}
            type="checkbox"
            name="skill1"
            id="checkbox1"
            value="Coding"
          />
          Coding
          <input
            className="input-checkbox"
            onChange={(event) => setSkill2(event.target.value)}
            type="checkbox"
            name="skill2"
            id="checkbox2"
            value="Design"
          />
          Design
          <input
          className="input-checkbox"
            onChange={(event) => setSkill3(event.target.value)}
            type="checkbox"
            name="skill3"
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
