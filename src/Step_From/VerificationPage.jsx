import React, { useState } from 'react';

const VerificationPage = ({ formData, prevStep }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const [submitdone,setSubmitdone]= useState(false)
  const HandleSubmit =()=>{
    setSubmitdone(true);
  }

  return ( 
    <>
      <div>
        <h2>Thanks {formData.fname}, your details have been submitted</h2>
        {!submitdone && (
          <button onClick={handleShowDetails}>
            {showDetails ? 'Hide Details' : 'Check Your Submitted Details'}
          </button>
        )}
        {showDetails  && !submitdone && (
          <div className='details'>
            <h3>Submitted Details:</h3>
            <p><strong>First Name:</strong> {formData.fname}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNo}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.flatNo}</p>
            <p><strong>Pincode:</strong> {formData.pincode}</p>
            <p><strong>Card Number:</strong> {formData.cardNo}</p>
            <p><strong>CVV:</strong> {formData.cvv}</p>
          </div>
        )}
      </div>
      {!showDetails && !submitdone && (
      <div className="nav">
        <button onClick={prevStep}>Back</button>
        <button onClick={() => {alert('Form Submitted!') ; HandleSubmit()}}>Submit</button>
      </div>
      )}
    </>
  );
};

export default VerificationPage;
