// This function checks if a state law violates the Commerce Clause.
function doesLawViolateCommerceClause(state, law) {

    // Check if the law discriminates against interstate commerce.
    if (law.discriminatesAgainstInterstateCommerce()) {
      return true;
    }
  
    // Check if the law unduly burdens interstate commerce.
    if (law.undulyBurdensInterstateCommerce()) {
      return true;
    }
  
    // If the law does not meet any of the above criteria, then it does not violate the Commerce Clause.
    return false;
  }
  
  // This function checks if a law discriminates against interstate commerce.
  function doesLawDiscriminateAgainstInterstateCommerce() {
  
    // Check if the law applies differently to in-state and out-of-state businesses.
    if (law.appliesDifferentlyToInStateAndOutOfStateBusinesses()) {
      return true;
    }
  
    // Check if the law has a discriminatory purpose.
    if (law.hasDiscriminatoryPurpose()) {
      return true;
    }
  
    // If the law does not meet any of the above criteria, then it does not discriminate against interstate commerce.
    return false;
  }
  
  // This function checks if a law unduly burdens interstate commerce.
  function doesLawUnduelyBurdenInterstateCommerce() {
  
    // Check if the law imposes a significant cost on interstate commerce.
    if (law.imposesSignificantCostOnInterstateCommerce()) {
      return true;
    }
  
    // Check if the law has a less restrictive alternative that would achieve the same purpose.
    if (law.hasLessRestrictiveAlternative()) {
      return true;
    }
  
    // If the law does not meet any of the above criteria, then it does not unduly burden interstate commerce.
    return false;
  }