// Example 1

const scores = [12, 24, 10, 24];

function breakingRecords(scores) {
  let main = 0;
  least = 0;
  mainScore = scores[0];
  leastScore = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > mainScore) {
      mainScore = scores[i];
      main++;
      continue;
    }
    if (scores[i] < leastScore) {
      leastScore = scores[i];
      least++;
      continue;
    }
  }
  console.log(main, least);
}
breakingRecords(scores);


// Example 2

const goals = [24, 10, 24, 12];

function beatingRecords(goals) {
  let best = 0;
  worst = 0;
  bestGoal = goals[0];
  worstGoal = goals[0];
  for (let i = 0; i < goals.length; i++) {
    if (goals[i] > bestGoal) {
      bestGoal = goals[i];
      best++;
      continue;
    }
    if (goals[i] < worstGoal) {
      worstGoal = goals[i];
      worst++;
      continue;
    }
  }
  console.log(best, worst);
}
beatingRecords(goals);
