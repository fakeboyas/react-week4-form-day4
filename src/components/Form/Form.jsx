import React,{useState} from 'react'

import './Form.css'

function Form() {
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState()
    const [address, setAddress] =useState()
    const [birthday, setBirthday] = useState()
    const [gender,setGender] = useState()
    const [skill,setSkill] =useState()
    

    

    function handleSubmit() {
        
        alert(`Nama: ${name} \n Email: ${email}\n Password: ${password} \n Address: ${address} \n BirthDate: ${birthday}\n Gender: ${gender}\n Skill: ${skill}`)
   }
    return (
        <>
            
        <form className="container" onSubmit={handleSubmit}>
          <input onChange={(event) =>setName(event.target.value) } placeholder='Name' type="text" name="fullName" id="name" value={name}/>  
          <input onChange={(event) =>setEmail(event.target.value) } placeholder='Email' type="email" name="email" id="email" value={email}/>
          <input onChange={(event) =>setPassword(event.target.value) } placeholder='Password' type="password" name="password" id="password" value={password}/>
          <textarea onChange={(event) =>setAddress(event.target.value) } placeholder='Address' name="address" id="address" cols="30" rows="10" value={address}></textarea>
          <input onChange={(event) =>setBirthday(event.target.value) } placeholder='Birth Date' type="date" name="birthDate" id="date" value={birthday}/>
          <input onChange={(event) =>setGender(event.target.value)} type="radio" name="gender" id="gender1" value='Male'/>Male
          <input onChange={(event) =>setGender(event.target.value)} type="radio" name="gender" id="gender2" value='Female'/>Female
          <input onChange={(event) =>setSkill(event.target.value)} type="checkbox" name="skill" id="checkbox1" value='Coding'/>Coding
          <input onChange={(event) =>setSkill(event.target.value)} type="checkbox" name="skill2" id="checkbox2" value='Design'/>Design
          <input onChange={(event) =>setSkill(event.target.value)} type="checkbox" name="skill3" id="checkbox3" value='Gaming'/>Gaming
            <input className='submit' type="submit"/>
        
                </form>
        </>
    )
}

export default Form
