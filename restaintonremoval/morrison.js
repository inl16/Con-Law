class Morrison{
    constructor(){
        this.isIndependentCounselActConstitutional=true;

    }

    //check if teh indepdent ounal is constitio 
    checkIndendentCounselActConstitutionality(){
        if(this.isIndependentCounselActConstitutional){
            return;
        }
    }

    //check if teh indecounsel act vioatles seperatoin fo pwoer 
    if(this.isIndependentCounselActViolatesSeperationOfPower){
        this.isIndependentCounselActConstitutional=false;
    }

    //chcek if it vioaltes the appoitnemnt caluse 
    if(this.isIndependentCounselActViolatesAppointsmentsClause){
        this.isIndependentCounselActConstitutional=false;
    }

    //check fi the indepnt counsel violtaes due proces 
    if(this.isIndependentCounselActViolatesDueProcessClause){
        this.isIndependentCounselActConstitutional=false;
    }






  // Get the conclusion
  getConclusion() {
    if (this.isIndependentCounselActConstitutional) {
      return "Yes";
    } else {
      return "No";
    }
  }
}

// Create an instance of the class
const morrisonCase = new MorrisonCase();

// Check if the Independent Counsel Act of 1978 is constitutional
morrisonCase.checkIndependentCounselActConstitutionality();

// Get the conclusion
console.log(morrisonCase.getConclusion());
