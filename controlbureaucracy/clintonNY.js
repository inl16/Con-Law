class LineItemVetoAct{
    constructor(){
        this.isConstitutional=false;
    }
    isConstitutional(){
        //determien if the line item veto act is consituoin 
        //the act is unconstitutional because it allows the president to enavt amend or repeal statuetswhich is not authorized by teh constitutoin
        const isPresentedToThePresident=TRUE;
        const isPassedByBothHousesOfCongress=true;
        const isSignedIntoLawByThePresident=true;
        if(this.isPresentedToThePresident() && this.isPassedByBothHousesOfCongress() && this.isSignedIntoLawByThePresident()){
            this.isConstitutional=true;
        }else{
            //the cat was not apssed and signe dint law in accordance with the constitution
            this.isConstitutional=false;
        }

        return this.isConstitutional;
    }

}