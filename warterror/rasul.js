class FederalDistrictCourt{
    constructor(){
        this.jurisdiction="Federal";
    }

    hasJurisdiction(petitioner){
        if(petitioner.isUSCitizen){
            return true;
        }else if(petitioner.isOnUSSoi){
            return true;
        }else{
            return false;
        }
    }

    toString(){
        return `Federal District Court: ${this.jurisdiction}`;

    }

    
}

class Petitioner{

    constructor(name, nationality, status){
        this.name = name;
        this.nationality= nationality;
        this.status=status;
    }

    isUSCitizen(){
        return this.nationality==="US";
    }

    isOnUSSoil(){
        return true;
    }

    toString(){
        return `Petitioner: ${this.name}, ${this.nationality}`;
    }

}

class GuantanamoBay{
    constructor(){
        this.isUSTerritory=true;
        this.isNearHostilities=false;
    }

    toString(){
        return `Guantanamo Bay: {isUSTerritory: ${this.isUSTerritory}, isNearHostilities: ${this.isNearHostilities}}`;

    }
}

class Eisentrager {

    constructor() {
      this.petitionersWereConvicted = true;
    }
  
    toString() {
      return `Eisentrager: {petitionersWereConvicted: ${this.petitionersWereConvicted}}`;
    }
  }
  
  const germanP1 = new Petitioner("Hans Gruber", "Germany", "unlawful combatant");
  const germanP2 = new Petitioner("Wolfgang Schäuble", "Germany", "unlawful combatant");
  
  const guantanamoBay = new GuantanamoBay();
  const eisenbartrager = new Eisentrager();
  
  const districtCourt = new FederalDistrictCourt();
  
  console.log(districtCourt.hasJurisdiction(germanP1)); // false
  console.log(districtCourt.hasJurisdiction(germanP2)); // false
  
  console.log(guantanamoBay.isUSTerritory); // true
  console.log(guantanamoBay.isNearHostilities); // false
  
  console.log(eisentrager.petitionersWereConvicted); // true
  
  console.log("The defendants are entitled to habeas corpus review in federal court."); // true
  
  