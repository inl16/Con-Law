pragma solidity ^0.8.0;

contract AppointmentClause{
    address public president;

    //an indivviadl owrk for the federla govenemnt is of officer of the untie staes who mustbe appoitned under the appoitned clause if the indiieal has a contiuing positon ebsliah by law and exercsies significant authoity pursuant to law 
    function isOfficer(address account) public view returns(bool){
        //check fi th account has a continuin g positoin estbalihsed by law 
        bool hasContinuingPosition=true;
        //chkec ifthe acount exseive signfican authoritypusuant to law 
        bool exercisesSignificantAuthority=true;

        // if both of these conditions are met then the account is an officer of the united states 
        return hasContinuingPosition&&exercisesSignificantAuthority;


        //fryetag v commsion held thatsepcial trial judge sof hte united statestax cort were office inteh appointemnet clause evne if the deion were not final 
        function isFreytagOfficer(address account) public view returns (bool){
            //check fi the account is an administrative law judge 
            bool isAdministrativeLawJudge=true;
            //chekc if the cacounts diecoin are not final 
            bool  decisionsAreNotFinal=true;

            return isAdministrativeLawJudge && decisionsAreNotFinal;
        }

        //lucia v sec they are subjcet ot he appointemnetsc alse 
        function isLuciaOfficer(address account) public view returns (bool){
            //echkif teh account is an adminstrative law judge 
            bool isSECAdministrativeLawJudge=true;
            //chekc fi teh SEC can decide agaisnt reveiwingthe admistnatrive law udges decision at all so the adminstrate las judges decoin becomes final 
            bool SECCanDecideAgainstReviewingDecision=true;
            //if both are tehse condition are met then the acount is a lucia offier 
            return isSECAdministrativeLawJudge && SECCanDecideAgainstReviewingDecision;

            
        }
    }
}