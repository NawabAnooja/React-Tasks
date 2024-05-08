import React, { useState } from 'react';
import './LoginForm.css'; 

const LoginForm = () => {
  const [errors, setErrors] = useState({}); 
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

    // Clear validation errors when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear error for the current field
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
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
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
    if (!data.gender) {
      errors.gender = 'Gender is required';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }
    if (!data.confirm_password.trim()) {
      errors.confirm_password = 'Confirm Password is required';
    } else if (data.confirm_password !== data.password) {
      errors.confirm_password = 'Passwords do not match';
    }
    if (!data.country) {
      errors.country = 'Country is required';
    }
    if (!data.state) {
      errors.state = 'State is required';
    }
    if (!data.city) {
      errors.city = 'City is required';
    }
    if (!data.pincode.trim()) {
      errors.pincode = 'Pincode is required';
    } else if (!isValidPincode(data.pincode)) {
      errors.pincode = 'Invalid pincode';
    }
    if (!data.accept_terms) {
      errors.accept_terms = 'You must accept the terms and conditions';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPincode = (pincode) => {
    return /^\d{6}$/.test(pincode);
  };

  return (
    <div className="login-form">
      <h2>LoginForm</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            <label htmlFor="female">Female</label>
          </div>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
  
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} />
          {errors.confirm_password && <div className="error">{errors.confirm_password}</div>}
        </div>
  
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select id="country" name="country" value={formData.country} onChange={handleChange}>
            <option value=""></option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
          {errors.country && <div className="error">{errors.country}</div>}
        </div>
  
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select id="state" name="state" value={formData.state} onChange={handleChange}>
            <option value=""></option>
            <option value="telangana">Telangana</option>
            <option value="andhra_pradesh">Andhra Pradesh</option>
          </select>
          {errors.state && <div className="error">{errors.state}</div>}
        </div>
  
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select id="city" name="city" value={formData.city} onChange={handleChange}>
            <option value=""></option>
            <option value="hyderabad">Hyderabad</option>
            <option value="vizag">Vizag</option>
          </select>
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
  
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
          {errors.pincode && <div className="error">{errors.pincode}</div>}
        </div>
  
        <div className="form-group">
          <input type="checkbox" id="accept_terms" name="accept_terms" checked={formData.accept_terms} onChange={handleChange} />
          <label htmlFor="accept_terms">I accept the terms and conditions</label>
          {errors.accept_terms && <div className="error">{errors.accept_terms}</div>}
        </div>
  
        <div className="form-group">
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
