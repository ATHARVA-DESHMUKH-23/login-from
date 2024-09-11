import React, { useState } from 'react';
import FormPage1 from './FromPage1';
import FormPage2 from './FromPage2';
import FormPage3 from './FromPage3';
import validate from './Validation';
import VerificationPage from './VerificationPage';


const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: '',
    phoneNo: '',
    email: '',
    flatNo: '',
    pincode: '',
    cardNo: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});

  // Handle navigation between steps
  const nextStep = () => {
    const currentErrors = validate(formData, step);
    if (Object.keys(currentErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form submission
  const handleSubmit = () => {
    const currentErrors = validate(formData, step);
    if (Object.keys(currentErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  // Update formData state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  

  // Render the appropriate step form based on the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <FormPage1 formData={formData} handleChange={handleChange} errors={errors} nextStep={nextStep} />;
      case 2:
        return <FormPage2 formData={formData} handleChange={handleChange} errors={errors} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <FormPage3 formData={formData} handleChange={handleChange} errors={errors} prevStep={prevStep} handleSubmit={handleSubmit} />;
      case 4:
        return <VerificationPage formData={formData}  prevStep={prevStep} handleSubmit={handleSubmit}  />;
      default:
        return <FormPage1 />;
    }
  };

  return (
    <div>
      <div className='form'>
        <div>
      {renderStep()}
      </div>
      </div>
    </div>
  );
};

export default StepForm;
