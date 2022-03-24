// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers() {
  const returnFirstTwoDrivers = function (drivers) {
    const a = [...drivers];
    a.splice(2, 2);
    // console.log(drivers);
    return a;
  };
  // console.log(drivers);
  return returnFirstTwoDrivers(drivers);
}

function returnLastTwoDrivers() {
  const returnLastTwoDrivers = function (drivers) {
    const b = [...drivers];
    b.splice(0, 2);
    //console.log(drivers);
    return b;
  };
  //console.log(drivers);
  return returnLastTwoDrivers(drivers);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
  function multiplier(int) {
    const a = int * int;
    // console.log(a);
    return a;
  }
  // console.log(multiplier);
  return multiplier;
}

const fareDoubler = function (createFareMultiplier) {
  return createFareMultiplier * 2;
};

const fareTripler = function (createFareMultiplier) {
  return createFareMultiplier * 3;
};

function selectDifferentDrivers(arrayOfDrivers, funct) {
  return funct();
}
