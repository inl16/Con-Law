// this function chekc if  sate law vioaltes the commerc elcause 
function doesLawViolateCommerceCluase(state, law){
    //chek if teh law discriiantes against interstate commerce 
    if(law.discriminatesAgainstInterstateCommerce()){
        true;
    }
    //check ifthe alw has a legiatmie prupose 
    if(!lawhasLegitimatePurpose()){
        return true;
    }

    //check if the incidental burden tha tth elaw impose son interstate commerce 
    if(law.incidentalBurdenOnInterstateCommerceIsClearlyExcessive()){
        return true;
    }

    // if the law does not meet any of the above criteria then it does not vioalte teh commerce clause 
    return false;


}

// this function check if a alw discrimates against instersta ceommre 
function doesLawDiscriminateAgainstInterstateCommerce(){
    //check fi the law applies differently to instateand out of state businesses 
    if(law.appliesDifferentlyToInStateAndOutOfStateBusinesses()){
        return true;
    }

    //chekc if the law has a discriminatory pursoe 
    if(law.hasDiscriminatoryPurpose()){
        return true;
    }

    // if the alw does not emet any of the baove crietera 
    return false;
}

// check if teh alw has a legiamte purpose 
function doeslawHaveLegitimatePurpose(){
    //check if te law is desingd to protectconsuerms from fraud or deception
    if(law.isDesignedToProtectConsumersFromFraudOrDeception()){
        return true;
    }

    //hcekc if teh law is desingeto promote public health or safety 
    if(law.isDesignedToPromoteHealthOrSafety()){
        return true;
    }

    // if the law deisigned to conserve a ntural resourc e
    if(law.isDesigendToProtectNaturalResource()){
        return true;
    }

}

// This function checks if the incidental burden that a law imposes on interstate commerce is clearly excessive in light of the substantial state interest.
function isIncidentalBurdenOnInterstateCommerceClearlyExcessive() {

    // Calculate the incidental burden that the law imposes on interstate commerce.
    var incidentalBurden = law.incidentalBurdenOnInterstateCommerce();
  
    // Calculate the substantial state interest that the law is designed to achieve.
    var substantialStateInterest = law.substantialStateInterest();
  
    // Compare the incidental burden to the substantial state interest.
    if (incidentalBurden > substantialStateInterest) {
      return true;
    }
  
    // If the incidental burden is not greater than the substantial state interest, then it is not clearly excessive.
    return false;
  }
