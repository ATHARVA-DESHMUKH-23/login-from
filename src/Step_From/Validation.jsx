const validate = (formData, step) => {
    let errors = {};
  
    switch (step) { 
      case 1:
        if (!formData.fname) {
          errors.fname = 'Name is required';
        }
        if (!formData.phoneNo) {
          errors.phoneNo = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNo)) {
          errors.phoneNo = 'Phone number must be 10 digits';
        }
        if (!formData.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email address is invalid';
        }
        break;
  
      case 2:
        if (!formData.flatNo) {
          errors.flatNo = 'Address is required';
        } else if (formData.flatNo.length <= 10) {
          errors.flatNo = 'Address is too short';
        }
        if (!formData.pincode) {
          errors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
          errors.pincode = 'Pincode must be 6 digits';
        }
        break;
  
      case 3:
        if (!formData.cardNo) {
          errors.cardNo = 'Card number is required';
        }
        if       (!formData.cvv) {
            errors.cvv = 'CVV is required';
          } else if (!/^\d{3,4}$/.test(formData.cvv)) {
            errors.cvv = 'CVV must be 3 or 4 digits';
          }
          break;
    
        default:
          break;
      }
    
      return errors;
    };
    
    export default validate;
    
  