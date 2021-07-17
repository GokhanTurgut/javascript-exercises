const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    
    people.sort((a, b) => {
        // return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
        if (a.yearOfDeath && b.yearOfDeath) {
            return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
        }
        else if (!a.yearOfDeath && b.yearOfDeath) {
            return (b.yearOfDeath - b.yearOfBirth) - (currentYear - a.yearOfBirth);
        }
        else if (a.yearOfDeath && !b.yearOfDeath) {
            return (currentYear - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
        }
    })

    return people[0];
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// console.log(findTheOldest(people));
module.exports = findTheOldest;
