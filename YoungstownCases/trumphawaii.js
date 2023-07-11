class YoungstownSheetAndTube{
    constructor(executiveOrder, legalClaims){
        this.executiveOrder=executiveOrder;
        this.legalClaims=legalClaims;
    }

    isConstitutional(){
        //chek if the president is acting pursuant to specifi congressinal authroitzatoin
        if(this.executiveOrder,isAuthorizedByCongress){
            return true;
        }

        //check fi the prsdinet is acting in repsosne to national ermgey that requries eimmediate attetion
        if(this.executiveOrder.isInResponseToNationalEmergency){
            return true;
        }

        //check if the presdient is acting the absnece of congressional actoin and inaccordaince with the president constitoinal authority as commander in chief 
        if(this.executiveOrder.isWithinPresidentInherentAuthorityCommanderAndChief){
            return true;
        }

        // the prsindt actions are not constitutional 
        return false;
    }
}