import React, { useState } from 'react';
import './LoginForm.css'; 

const LoginForm = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    confirm_password: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    accept_terms: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);   
    setFormData({
      name: '',
      email: '',
      gender: '',
      password: '',
      confirm_password: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
      accept_terms: false,
    });
  };
  

  return (
    <>
     <div className="login-form">
     
      <div>LoginForm</div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
        <label htmlFor="female">Female</label>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
  
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} /><br />
  
        <label htmlFor="country">Country:</label>
        <select id="country" name="country" value={formData.country} onChange={handleChange}>
          <option value=""></option>
          <option value="india">India</option>
          <option value="usa">USA</option>
         
        </select>
  
        <label htmlFor="state">State:</label>
        <select id="state" name="state" value={formData.state} onChange={handleChange}>
          <option value=""></option>
          <option value="telangana">Telangana</option>
          <option value="andhra_pradesh">Andhra Pradesh</option>
        
        </select>
  
        <label htmlFor="city">City:</label>
        <select id="city" name="city" value={formData.city} onChange={handleChange}>
          <option value=""></option>
          <option value="hyderabad">Hyderabad</option>
          <option value="vizag">Vizag</option>
          
        </select> 
  
        <label htmlFor="pincode">Pincode:</label>
        <input type="text" id="pincode" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
  
        <input type="checkbox" id="accept_terms" name="accept_terms" checked={formData.accept_terms} onChange={handleChange} />
        <label htmlFor="accept_terms">I accept the terms and conditions</label>
  
        <input type="submit" value="Save" />
      </form>
      </div>
    </>
  );
};

export default LoginForm;
