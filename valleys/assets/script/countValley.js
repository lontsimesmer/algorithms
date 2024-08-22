const steps = 8,
  path = ["U", "D", "D", "D", "U", "D", "U", "U"];

function countValleys(steps, path) {
  let hikeArr = [];
  let seaLevel = 0;
  let valley = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      seaLevel += 1;
    } else if (path[i] === "D") {
      seaLevel -= 1;
      if (seaLevel === 0) {
        valley++;
      }
    }
    hikeArr.push(seaLevel);
  }
  console.log(valley);
}
countValleys(steps, path);
