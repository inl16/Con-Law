//defeine a class for the president 

// the fisa was an uncosnitutionl aattempt by congress to interfere wiethe president 
//exsulive pwoer to reconize foreginnation 
//it is a fundamentla consituoin power that cannot be infriend by congress 
class President{
    constructor(){
        this.power=0;
    }

    //increas the presdient pwoer when je acts pursuant to a specific authroizaotin from congress 
    increasePower(authorizatoin){
        this.power+=1;
    }

    //increase the president pweor when he acts int eh abscnee of congreosinal action but in accordance with the constitoin 
    increasePowerWithoutAuthorization(){
        this.power+=0.5;
    }

    //decrease the pressdients power when he acts in opposition to a specif congressoinal act 
    decreasePower(act){
        this.power-=1;
    }

    // apply jaks three tired fromaewkro to a pseiif claw 
    applyJacksonFramework(law){
        if(law.isAuthorizedByCongress){
            this.increasePower("purusant to specific authoriizaotin from congrss ");

        }else if (law.isConsistentWithoutAuthorization){
            this.increasePowerWithoutAuthorization("in accordance witht eh consittuoin");

        }else{
            this.decereasePower("in opposition to a specific conresaional act ")
        }
    }

    /// create a new instance fo teh prsint class 

}

const president = new President();

//apply jacskson three tired framaweokr to FISA 
president.applyJacksonFramework({
    isAuthorizedByCongress: false, 
    isConsistentWithTheConstitution: false,
});

//print the president power 
console.log(president.power);
