import React from 'react';

const LoginForm = () => {
  return (
    <>
      <div>LoginForm</div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" /><br />

        <label>Gender:</label><br />
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label><br />
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label><br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Password" /><br />

        <label htmlFor="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" /><br />

        <label htmlFor="country">Country:</label>
        <select id="country" name="country">
            <option value=""></option>
          <option value="usa">INDIA</option>
          <option value="uk">UK</option>
          <option value="canada">USA</option>
        </select><br /><br />

        <label htmlFor="state">State:</label>
        <select id="state" name="state">
            <option value=""></option>
          <option value="state1">Telangana</option>
          <option value="state2">Andhrapradesh</option>
          <option value="state3">Tamilnadu</option>
          <option value="state4">Karnataka</option>
        </select><br /><br />

        <label htmlFor="city">City:</label>
        <select id="city" name="city">
            <option value=""></option>
          <option value="city1">Hyderabad</option>
          <option value="city2">Vizag</option>
          <option value="city3">Chennai</option>
          <option value="city4">Bangalore</option>
        </select><br /><br />

        <label htmlFor="pincode">Pincode:</label>
        <input type="text" id="pincode" name="pincode" placeholder="Pincode" /><br /><br />

        <input type="checkbox" id="accept_terms" name="accept_terms" />
        <label htmlFor="accept_terms">I accept the terms and conditions</label><br /><br />

        <input type="submit" value="Save" />
      </form>
    </>
  );
};

export default LoginForm;
