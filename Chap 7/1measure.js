function runRobot1(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(...robots) {
  let states = [];
  for (let i = 0; i < 100; i++) {
    states.concat(VillageState.random());
  }
  let number = 0;
  for (let robot of robots) {
    number++;
    let avg = states.reduce((avg, state) => avg + runRobot1(state, robot) / 10);
    console.log("Robot #${number} took on average ${avg} steps");
  }
}
