const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  // According to the constraint
  const m = grid.length,
    n = grid[0].length;
  let count = 0;

  // Call a depth first search function
  const check = (i, j) => {
    // Check if bounds and if cell is water
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") {
      return;
    }

    // Mark Island as visited
    grid[i][j] = "0";
    // Explore adjecent cells
    check(i + 1, j); // down
    check(i - 1, j); // up
    check(i, j + 1); // right
    check(i, j - 1); // left
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        // Found an island
        count++;
        check(i, j); // Mark the whole island
      }
    }
  }
  return count;
}
console.log(numIslands(grid1));
console.log(numIslands(grid2));
