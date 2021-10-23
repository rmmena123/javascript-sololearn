function main() {
    var goalsTeam1 = parseInt(readLine(), 10);
    var goalsTeam2 = parseInt(readLine(), 10);

    finalResult(goalsTeam1, goalsTeam2)
  
}

function finalResult(team1_score, team2_score) {
  if(team1_score > team2_score) {
      console.log("Team 1 won");
  }

  else if(team1_score < team2_score) {
      console.log("Team 2 won");
  }

  else {
      console.log("Draw");
  }
};