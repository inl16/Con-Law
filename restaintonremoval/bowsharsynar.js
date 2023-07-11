class Bowsher{
    constructor(){
        this.isViolated=false;
    }

    //chekc fi the act vioaltes the sepration fo ower
    checkSepearationOfPowers(){
        if(this.isViolated){
            return true;
        }

        //chekc if the act dlegated executive powert to an officer under congess direct control 
        if(this.delegatedExectuivePowers){
            this.isViolated=true;
        }

        //hcekf if congess retained oncotlr over teh exectuvie of teh act 
        if(this.congressRetainedControl){
            this.isViolated=true;
        }

        //chcek if conges intrued in the executive fucntion 
        if(this.congressIntrudedIntoExecutiveFunction){
            this.isViolated=true;
        }

    }

    //get the consluion 
    getConclusion(){
        if(this.isViolated){
            return "yes";

        }else{
            return "no"
        }
    }

}

//const create na instance of the class 
const granrumand = new Bowsher();

granrumand.checkSepearationOfPowers();

//get the conlsuion 
console.log(granrumand.getConclusion());
