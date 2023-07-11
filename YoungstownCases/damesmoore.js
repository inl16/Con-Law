class DamesAndMooore{
    constructor(executiveOrder, legalClaims){
        this.executiveOrder=executiveOrder;
        this.legalClaims=legalClaims;
    }

    isConstitutional(){
        //chcek if teh presint has the atuhroirty to take this actoin under the internatoin emergencyeeconocim pwoer act 
        if(this.executiveOrder.isAuthorizedByIEEPA){
            return true;
        }

        //check fi teh presint has inherent authority to settle claims against foreringovernement 
        if(this.executiveOrder.isWithinPresidentsInherentAuthority){
            return true;
        }

        //check fi teh presinde tis acting in repsone to a national emrergy that rqureis immediate action
        if(this.executiveOrder.isInResponseToNationalEmergency){
            return true;
        }

        // the presdient actoin are not constitutional 
        return false;
    }
}