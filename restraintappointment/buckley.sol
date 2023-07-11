pragma solidity ^0.8.0;

contract AppointmentsClause {

  // The Appointments Clause of the United States Constitution vests the power to appoint “Officers of the United States” exclusively in the President.
  address public president;

  // An agency whose members are appointed by Congress may exercise powers of an investigative and informative nature.
  function createInvestigativeAgency(bytes32 name, address[] members) public {
    // Create a new agency with the specified name and members.
    Agency agency = new Agency(name, members);

    // Grant the agency the power to conduct investigations and collect information.
    agency.grantPowers(Power.Investigate, Power.CollectInformation);
  }

  // An agency whose members are appointed by Congress may not exercise powers that fall outside of Congress’s legislative function.
  function createNonLegislativeAgency(bytes32 name, address[] members) public {
    // Create a new agency with the specified name and members.
    Agency agency = new Agency(name, members);

    // Do not grant the agency the power to conduct civil litigation, make rules, or determine eligibility for funds or federal elective office.
    agency.revokePowers(Power.Litigation, Power.Rulemaking, Power.Eligibility);
  }

  // The investigatory and informative powers of FEC members are constitutional, but the commission’s more substantial powers are not.
  struct Agency {
    bytes32 name;
    address[] members;
    bool[] powers;
  }

  enum Power {
    Investigate,
    CollectInformation,
    Litigation,
    Rulemaking,
    Eligibility
  }

  function Agency(bytes32 name, address[] members) public {
    this.name = name;
    this.members = members;
    this.powers = [true, true];
  }

  function grantPowers(Power... powers) public {
    for (uint i = 0; i < powers.length; i++) {
      this.powers[powers[i]] = true;
    }
  }

  function revokePowers(Power... powers) public {
    for (uint i = 0; i < powers.length; i++) {
      this.powers[powers[i]] = false;
    }
  }

  function isPowerGranted(Power power) public view returns (bool) {
    return this.powers[power];
  }
}