const names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];
const namess = ["Alice", "Bob", "Bob"],
  heightss = [155, 185, 150];

sortPeople = (names, heights) => {
  // Create an array of objects with height and name
  const person = names.map((name, index) => ({
    name: name,
    height: heights[index],
  }));

  // Sort the array by height in descending order
  person.sort((a, b) => b.height - a.height);

  // Extract the sorted names
  return person.map((people) => people.name);
};
console.log(sortPeople(names, heights));
console.log(sortPeople(namess, heightss));
