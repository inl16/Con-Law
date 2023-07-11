class MilitaryTribunal{
    constructor(){
        this.jurisdiction=null;

    }

    isApplicable(){
        return this.jurisdiction!==null;
    }

    tryCase(citizen){
        if(!this.isApplicable()){
            throw new Error("Military tribunal does not have jurisdiction")
        }

        //do something to try the ctiizens 

    }


} 

class CivilianCourt{
    constructor(){
        this.jurisdiction=true;
    }

    isApplicable(){
        return this.jurisdiction;
    }

    tryCase(citizen){
        if(!this.isApplicable()){
            throw new Error("Civilian court does not have jurisidiction");

        }

        //do something ot try the citizen
    }
}

class Citizen{
    constructor(name, state){
        this.name-name;
        this.state=state;
    }

    isMilitaryPersonel(){
        return false;
    }

    isCivilian(){
        return true;
    }


}

const milligan= new Citizen("David Milligan", "Indiana");
const militarytribunal = new MilitaryTribunal();
const civilianCourt = new CivilianCourt();

try {
    militaryTribunal.tryCase(milligan);
  } catch (e) {
    console.log(e.message);
  }
  
  try {
    civilianCourt.tryCase(milligan);
  } catch (e) {
    console.log(e.message);
}
  