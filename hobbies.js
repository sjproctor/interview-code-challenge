// code given
function findAllHobbyists(hobby, hobbies) {
  return []
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"]
}

console.log(findAllHobbyists("Yoga", hobbies))

// code the made the test pass
function findAllHobbyists(hobby, hobbies) {
  const arrayOfPeople = Object.keys(hobbies)
  return arrayOfPeople.filter((name) => {
    return hobbies[name].find((h) => h === hobby)
  })
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"]
}

console.log(findAllHobbyists("Yoga", hobbies))
// extra test case
console.log(findAllHobbyists("Pets", hobbies))
