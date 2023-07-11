function isMissouriVHollandConstitutional(act){
    //check if the act is based on a treaty between the untied states and a foregin nation
    if(!act.isBasedOnTreaty){
        return false;
    }
    //check if the act is necsary and propr to carry otthe terms of tehreaty 
    if(!act.isNecessaryAndProper){
        return false;

    }

    //the act is constitutional 
    return true;
}