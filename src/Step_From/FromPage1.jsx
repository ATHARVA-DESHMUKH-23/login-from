import React from 'react';

const FormPage1 = ({ formData, handleChange, errors, nextStep }) => {
  return (
    <div>
      
      <h2>Personal Information</h2>
      <label>Name</label>
      <input
        type="text"
        name="fname"
        value={formData.fname}
        onChange={handleChange} 
        placeholder={errors.fname}
      />
      {errors.fname && <p>{errors.fname}</p>}

      <label>Phone Number</label>
      <input
        type="text"
        name="phoneNo"
        value={formData.phoneNo}
        onChange={handleChange}
      />
      {errors.phoneNo && <p>{errors.phoneNo}</p>}

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default FormPage1;
