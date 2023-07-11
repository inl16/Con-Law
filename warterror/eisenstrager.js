class DurProcessCluase{
    constructor(){
        this.appliesToAliensInUS=true;
        this.appliesToAliensOutsideUS=false;

    }

    isApplicable(alien, location){
        if(alien,isUSCitizen){
            return true;
        }else if(alien.isOnUSSoil){
            return true;
    
        }else{
            return false;
        }
    }

    toString(){
        return `Due Process Clause: {appliesToAliensInUS: ${this.appliesToAliensInUS}, appliesToAliensOutsideUS: ${this.appliesToAliensOutsideUS}}`;
    }
}

class Petitoiner{
    constructor(name, nationality, status){
        this.name=name;
        this.nationality=nationality;
        this.status;
    }

    isUSCitizen(){
        return this.nationality==="US";

    }
    isOnUSSoil(){
        return false;
    }

    toString(){
        return `Petitioner: ${this.name}, ${this.nationality}`;

    }
}

class SupremeCourt {

    constructor() {
      this.decision = "Upheld";
    }
  
    upholdDecision(districtCourt) {
      if (districtCourt.decision === "Denied") {
        this.decision = "Upheld";
      } else {
        this.decision = "Reversed";
      }
    }
  
    toString() {
      return `Supreme Court: ${this.decision}`;
    }
  }
  
  const germanP1 = new Petitioner("Hans Gruber", "Germany", "unlawful combatant");
  const germanP2 = new Petitioner("Wolfgang Schäuble", "Germany", "unlawful combatant");
  