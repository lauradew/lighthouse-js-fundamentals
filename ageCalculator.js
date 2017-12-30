function ageCalculator(name, yearOfBirth, currentYear) {
  var ageCalculator = [name, yearOfBirth, currentYear];
  return((ageCalculator[0]  + " is " + (ageCalculator[2] - ageCalculator[1]) + " years old."));
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));