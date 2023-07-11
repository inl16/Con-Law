class UnlawfulCombatant {

    constructor(name, nationality, status) {
      this.name = name;
      this.nationality = nationality;
      this.status = status;
    }
  
    isUnlawfulCombatant() {
      return this.status === "unlawful combatant";
    }
  
    toString() {
      return `Unlawful Combatant: ${this.name}, ${this.nationality}`;
    }
  }
  
  class MilitaryCommission {
  
    constructor(name, jurisdiction) {
      this.name = name;
      this.jurisdiction = jurisdiction;
    }
  
    tryUnlawfulCombatant(unlawfulCombatant) {
      if (unlawfulCombatant.isUnlawfulCombatant()) {
        return this.jurisdiction.tryUnlawfulCombatant(unlawfulCombatant);
      } else {
        return false;
      }
    }
  
    toString() {
      return `Military Commission: ${this.name}, ${this.jurisdiction}`;
    }
  }
  
  class Jurisdiction {
  
    constructor(name, laws) {
      this.name = name;
      this.laws = laws;
    }
  
    tryUnlawfulCombatant(unlawfulCombatant) {
      if (this.laws.allowsUnlawfulCombatantTrial()) {
        return true;
      } else {
        return false;
      }
    }
  
    toString() {
      return `Jurisdiction: ${this.name}, ${this.laws}`;
    }
  }
  
  class Laws {
  
    constructor() {
      this.allowsUnlawfulCombatantTrial = true;
    }
  
    setAllowsUnlawfulCombatantTrial(allowsUnlawfulCombatantTrial) {
      this.allowsUnlawfulCombatantTrial = allowsUnlawfulCombatantTrial;
    }
  
    toString() {
      return `Laws: {allowsUnlawfulCombatantTrial: ${this.allowsUnlawfulCombatantTrial}}`;
    }
  }
  
  const usLaws = new Laws();
  const usJurisdiction = new Jurisdiction("United States", usLaws);
  const usMilitaryCommission = new MilitaryCommission("United States Military Commission", usJurisdiction);
  
  const germanSaboteur = new UnlawfulCombatant("Hans Gruber", "Germany", "unlawful combatant");
  
  console.log(usMilitaryCommission.tryUnlawfulCombatant(germanSaboteur)); // true
  