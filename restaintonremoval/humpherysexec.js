class HumphryCase{
    onstructor(){
        this.isPresidentsPowerToRemoveLimited=true;
    }

    //chekc if the presidnet pwoer to remove executive officesr is limtied 
    chcekPresidentPowerToRemoveLimited(){
        if(this.isPresidentsPowerToRemoveLimited()){
            return;
        }

        //heck fi the rpsint pwoer to remove executive officesr is limted by the cosnittuoin 
        if(this.isPresidentsPowerToRemoveLimitedByConstitution){
            this.isPresidentsPowerToRemoveLimited=true;
        }

        //check if teh prseint power to reomveexecutive officers is limtiedby the sepratoin fo pweor
        if(this.isPresidentsPowerToRemoveLimitedBySeperationOfPowers){
            this.isPresidentsPowerToRemoveLimited=true;
        }
    }

    //get the conclusion 
    getConclusion(){
        if(this.isPresidentsPowerToRemoveLimited){
            return "yes";

        }else{
            return  "no";
        }
    }
}

//creat an instnace oftthe calss 
const humphrycase= new HumphryCase();

//chekc fi the presint pwoer to remove executive officerss is limted 
humphrycase.chcekPresidentPowerToRemoveLimited();

console.log(humphrycase.getConclusion());
