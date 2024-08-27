const n = 5,
  c = [0, 4],
  m = 2;
function flatlandSpaceStations(n, c) {
  let maxDistance = 0;

  // Check the distance from the first city to the first space station
  maxDistance = Math.max(maxDistance, c[0] - 0);

  // Check the distance between space stations
  for (let i = 1; i < c.length; i++) {
    // The distance to the nearest space station is half the distance between two space stations
    const distBtnStations = Math.floor((c[i] - c[i - 1]) / 2);
    maxDistance = Math.max(maxDistance, distBtnStations);
  }

  // Check the distance from the last space station to the last city
  maxDistance = Math.max(maxDistance, n - 1 - c[c.length - 1]);

  return maxDistance;
}
console.log(flatlandSpaceStations(n, c));
