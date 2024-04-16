
import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData); 
  };

  return (
    <div class="asa">
      <h2 class="emvs">Sign Up</h2>
      <form  class="def" onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="username">Username:</label><br/> */}
          <input
          class="envinput"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="email">Email:</label><br/> */}
          <input
          class="envinput"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Yuor Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        
        <div>
          {/* <label htmlFor="number">Phone:</label><br/> */}
          <input
          class="envinput"
            type="text"
            id="mynumber"
            name="number"
            placeholder="Enter Your Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

         <div>
          {/* <label htmlFor="number">Phone:</label><br/> */}
          <input
          class="envinput"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          {/* <label htmlFor="number">Phone:</label><br/> */}
          <input
          class="envinput"
            type="cpassword"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />
        </div>

        </div>
      

        <button  class="wert" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
