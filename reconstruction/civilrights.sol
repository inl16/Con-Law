pragma solidity ^0.8.0;

contract JacksonVsMetropolitanEdisonCo{
    address public party1; 
    address public party2;

    constructor(address party1, address party2){
        this.party1 = party1;
        this.party2 = party2;
    }

    //check fi the contract is enfrocaeble undet the civil rights act 
    function isContractEnforceable() public view returns (bool){
        //chkec if the contract is between a private individual and a state actor 
        if(isContractBetweenPrivateIndividualAndStateActor()){
            //the contract is enforcable under  the civil rights act 
            return true
        }

        // the contract is not enforacble under the civil rihgts act 
        return false;
    }
    //chkec if the contract is between a private individual and a state actor 
    function isContractBetweenPrivateIndividualAndStateActor() public view returns (bool){
        //check if party 1 is a state actor 
        if(isParty1StateActor()){
            //the contract is between a private individual and a state actor 
            return true;
        }

        //chkec if party 2 is a state actor 
        if(isParty2StateActor()){
            //the contract is between a private indivual and a state actor 
            return true;
        }

        //the contract is not betwen a private individual and a state actor 
        return false;
    }

    //chkec if party 1 is a sate actor 
    function isParty1StateActor() public view returns (bool){
        //chkec if the address of party 1 is a government address 
        if(isGovernmentAddress(party1)){
            return true;
        }

        //party1 is not a state actor 
        return false;
    }

    //fucntion isparty2 a state actor 
    function isParty2StateActor() public view returns (bool){
        //check if party 2 is a government address 
        if(isGovernmentAddress(party2)){
            return true;
        }

        //party2 is not a state actor 
        return false;
    }

    ///chekc if the governemnt adddress is a government addres 
    function isGovernmentAddress(address address) public view returns (bool){
        //chkec if the address is in the list of of government address
        if(isAddressInListOfGovernmentAddresses(address)){
            return true;
        }
        return false;

    }
    //the list of government addressses 
    address[] public governmentAddress;

    function isContractDiscriminatorty() public view returns (bool){
        if(doesContractDiscriminateOnBasisOfRace()){
            //the contract is discriminatory 
            return true;
        }


    }

    if (doesContractDiscriminateOnBasisOfColor()) {
      // The contract is discriminatory.
      return true;
    }

    if (doesContractDiscriminateOnBasisOfReligion()) {
      // The contract is discriminatory.
      return true;
    }

    if (doesContractDiscriminateOnBasisOfSex()) {
      // The contract is discriminatory.
      return true;
    }

    if (doesContractDiscriminateOnBasisOfNationalOrigin()) {
      // The contract is discriminatory.
      return true;
    }

    // The contract is not discriminatory.
    return false;
  }

  // Check if the contract discriminates on the basis of race.
  function doesContractDiscriminateOnBasisOfRace() public view returns (bool) {
    // Check if the contract prohibits patrons of a certain race from entering




}
