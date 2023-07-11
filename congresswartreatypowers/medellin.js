function isMeddellinVTexasConstitutional(act){
    //check if teh act is based on a treaty between teh united staesand a foreing natoin 
    if(!act.isBasedOnTreaty){
        return false;
    }

    //check fi the act is necssary and propr to carry out the terms fo teh treatty 
    if(!act.isNecessaryAndProper){
        return false;
    }

    //check if the act is consitent with thte consittuoin 
    if(!act.isConsistentWithUSConstitution){
        return false;
    }

    //teh act is constitutional 
    return true;
}