import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
// import './login.css'
import { useEffect } from 'react'
const Login = () => {
  const [errors, setErrors] = useState({});
  const [details, setDetails] =useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  useEffect(() => {
    console.log("working");
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      label.classList.add('label');
    });
    function checker(input,label){
      if(input.value.trim()===''){
        label.classList.remove('label1');
        label.classList.add('label');
      }else{
        label.classList.remove('label');
        label.classList.add('label1');
      }
    }
 
    const inputs=document.querySelectorAll('input');
    inputs.forEach(input=>{
      input.previousElementSibling.classList.remove('label1');
      input.previousElementSibling.classList.add('label');
      const label=input.previousElementSibling;
      input.addEventListener('blur',()=>{
        checker(input,label);
      })
      input.addEventListener('focus',()=>{
        label.classList.add('label1');
 
      })
      input.addEventListener('input',()=>{
        checker(input,label);
      })
      input.addEventListener('keydown', function(event) {
        if (event.keyCode === 8 || event.keyCode === 46) {
            setTimeout(function() {
                checker(input,label);
            }, 0);
        }
    });
    })
    let reset=document.querySelector('.reset');
    reset.addEventListener('click',()=>{
      labels.forEach(label=>{
        label.classList.add('label');
        label.classList.remove('label1');
        inputs.forEach(input=>{
          input.value="";
        })
      })
    })
  }, []);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6; 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
  
    const isEmailValid = isValidEmail(email.value);
    if (!isEmailValid) {
      setErrors({ email: "The email is invalid." });
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
    const isPasswordValid = isValidPassword(password.value);
    if (!isPasswordValid) {
      setErrors({ password: "The password is invalid." });
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  
    if (isEmailValid && isPasswordValid) {
      navigate('/home');
    }
  };
  
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div className="inputwrapper">
        <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" id="email" required/>
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="inputwrapper">
        <label htmlFor="password" >Enter your password</label>
          <input type="password" name="password" id="password" required/>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="buttons">
          <button type="submit" className='submit'>Submit</button>
          <button type="reset" className='reset'>Reset</button>
        </div>
      </form>
    </div>
  )
}
 
export default Login