// th president does nto avhe th power to seiue privateproperty without congressoinal authorizatoin 
class President{
    constructor(){
        this.power =0; 

    }

    //increase the presidents power when he acts pusurant ot to a specific auhtorizatoin from congress
    increasePower(authorizatoin){
        this.power+=1;

    }

    //decrease the president sower when he acts in the absecne of a=congressoinal actoin but in accordance with the constituoin 
    increasePowerWithoutAuthorization(){
        this.power+=0.5;
    }

    //decrase teh presidents power when he acts in oppostionto a specific congressional act 
    decreasePower(act){
        this.power-=-1;
    }

    //create a new instacne of the president class 

}

const president=new President();

//incrase the president pwoer by acting pursuatn to a specific authorizatoin from congrs s
president.increasePower("decalre war ");


//increase the presint pwoer by acting the in absence oof congressional acoitn but in accordiance with the consittuion 
president.increasePowerWithoutAuthorization();

//decrease teh presinet pwoer by acting in opposition to a specific congressional acct 
president.decreasePower("raise taxes ");

// print hte preisdents power 

console.log(president.power);