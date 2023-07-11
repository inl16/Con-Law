class Legislation{
    constructor(name, text ){
        this.name=name;
        this.text=text;

    }

    isLegislative(){
        //deteremine if the lieglation is legislateive in prupse and effet 
        //this can be done by exmainign the text of the leislitnao nad if it alter teh legal rihgts dutires or relaoint of the peoiopoe 
        if(this.text.includes('alters right duties or relatoins of the people ')){
            return true;
        }else{
            return false;
        }
    }
    isConsitutional(){
        //determine if the legislation is constitutional 
        //this can be done by check if teh legilsaiton meets the consititutoinal reqruiement of presenemtn and bicaemrial 
        if(this.isLegislative()&&!this.isPresentedToThePresident()&&!this.isPassedByBothHousesOfCongress()){
            return false;

        }else{
            return true;
        }

        
    }

    isPresentedToThePresident(){
        //determine if teh legislation has been prestned ot hte presidsent 
        //this can be done by checking fi the legilasiton has been singed in to law or vetoed by the prsident 
        if(this.isSignedIntoLaw()||this.isVetoed()){
            return true;
        }else{
            return false;
        }

    }

    isPassedByBothHousesOfCongress(){
        //determine if teh legislation has been passed by both houses of congress
        //this can be done by checking if the legislation has been passed by the house of representatives and the senate 
        if(this.isPassedByTheHouseOfRepresenatives()&&this.isPassedByTheSenate()){
            return true;
        }else{
            return false;
        }


    }

    isSignedIntoLaw(){
        //determine if the legislatioin has been singed into law by the presdient 
        //this can be done by chekcinf the presdient has signed the legislationinto law 
        if(this.presidentsSignature){
            return true;
        }else{
            return false;
        }

    }

    isVetoed(){
        //determie if the legislation has been vetoerd by the presidnet 
        //this can be done by chekcing if the prseident has veoteod the legislaotin
        if(this.presidentVeto){
            return true;
        }else{
            return false;
        }
    }

    isPassedByTheHouseOfRepresenatives(){
        //determine if the legislation has been passed by teh house 
        //thid can be done if the legislation has been passed by a majortity vote 
        if(this.isPassedByTheHouseOfRepresenativesVoteCount > 0.5){
            return true;
        }else{
            return false;
        }

    }
    isPassedByTheSenate(){
        //detrmie if the legilsation has been pased by the senate 
        //this can be done by chekcing if the legilsaoitn has been mpassed yb a majorityvote in the seante 
        if(this.senateVoteCount>0.5){
            return true;
        }else{
            return false;
        }
    }



}