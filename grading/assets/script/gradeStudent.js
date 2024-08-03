function gradingStudents(grades) {
  let newGrades = [];
  for (let i in grades) {
    let nextMultiple = Math.ceil(grades[i] / 5) * 5;
    if (nextMultiple - grades[i] < 3 && grades[i] >= 38) {
      newGrades.push(nextMultiple);
    } else {
      newGrades.push(grades[i]);
    }
  }
  console.log(newGrades);
}
gradingStudents([73, 67, 38, 33]);
