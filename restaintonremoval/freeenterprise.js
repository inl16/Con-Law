class FreeEnterprise{
    constructor(){
        this.constitutional=true;
    }

    //check if it is constutainl 
    checkConstitutionality(){
        if(this.constitutional){
            return;
        }
    }

    //chekc if vioaltes sepreatoin fo power 
    if(this.vioalatesSeperationOfPowers){
        this.constitutional=false;
    }

    //chekc if it vioaltes appointemnet caluse 
    if(this.violatesAppointmentsCluase){
        this.constitutional=false;
    }

    //check if it vioaltes the due process clause 
    if(this.violatesDueProcess){
        this.constitutional=falsel;
    }

    getConclusion(){
        if(this.constitutional){
            return"yes"
        }else{
            return "no"
        }
    }
}


const freeenterprise = new FreeEnterprise();
freeenterprise.checkConstitutionality();
console.log(freeenterprise.getConclusion());