import React from 'react';

const FormPage2 = ({ formData, handleChange, errors, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Address Information</h2>
      <label>Address</label>
      <input
        type="text"
        name="flatNo"
        value={formData.flatNo}
        onChange={handleChange}
      />
      {errors.flatNo && <p>{errors.flatNo}</p>} 

      <label>Pincode</label>
      <input
        type="text"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
      />
      {errors.pincode && <p>{errors.pincode}</p>}

      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default FormPage2;
