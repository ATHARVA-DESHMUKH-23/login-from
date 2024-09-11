import React from 'react';

const FormPage3 = ({ formData, handleChange, errors, prevStep, handleSubmit }) => {
  return (
    <div>
      <h2>Payment Information</h2>
      <label>Card Number</label>
      <input
        type="text"
        name="cardNo"
        value={formData.cardNo}
        onChange={handleChange}
      />
      {errors.cardNo && <p>{errors.cardNo}</p>}

      <label>CVV</label>
      <input
        type="text"
        name="cvv"
        value={formData.cvv}
        onChange={handleChange}
      />
      {errors.cvv && <p>{errors.cvv}</p>}

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default FormPage3;
