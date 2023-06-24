const getAge = function(person) {
    return (!person['yearOfDeath']) ? new Date().getFullYear() - person['yearOfBirth'] : person['yearOfDeath'] - person['yearOfBirth'];
  };
  
  const findTheOldest = function(people) {
    return people.reduce((prev, curr) => {
      prev['age'] = getAge(prev);
      curr['age'] = getAge(curr);
      return (Math.max(prev['age'], curr['age']) === prev['age']) ? prev : curr;
    });
  };

// Do not edit below this line
module.exports = findTheOldest;
