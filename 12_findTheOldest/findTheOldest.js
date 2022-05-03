const findTheOldest = function (people) {
  return people.reduce((a, b) => {
    let currentDeathYear = b.yearOfDeath || new Date().getFullYear();
    let previousDeathYear = a.yearOfDeath || new Date().getFullYear();

    if (currentDeathYear - b.yearOfBirth > previousDeathYear - a.yearOfBirth) {
      return b;
    }
    return a;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
