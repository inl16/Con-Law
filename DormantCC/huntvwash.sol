pragma solidity ^0.8.0;

contract HuntWashingtonStateAppleAdvertisingCommission{
    //this function chekc if a state law dimscriminates aginstot of state business
    function isDiscriminatory(address state, bytes32 law) public view returns (bool){
        // get me teh etext of teh law 
        bytes memory lawText = web3.eth.getCode(state, law);

        //chekc if the law requries all buses to comply with a certain requriment evenn if they meet a higiher stnadard than another state 
        if(lawText.contains("all business must comply with the USDA grade" )){
            return true;
        }

        //chekc if the law has no legitamte purpose other than to protect in states busiens from competitionform out of statebuseinse 
        if(lawText.contains("to protect instate business form out of state business from competitio")){
            return true;
        }

        //chcek if teh alw is not necessary to protect consumresfrom or deception
        if(lawText.contains("to protect consumer from fraud of deception")){
            return true;
        }

        //check if teh law does not meet any of the above crtieria 
        return false;
    }
}