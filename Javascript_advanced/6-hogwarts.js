function studentHogwarts() {
  /**
   * studentHogwarts - return a object.
   */
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  /* our object */
  return {
    setName(newName) {
      name = newName;
    },
    rewardStudent() {
      changeScoreBy(1);
    },
    penalizeStudent() {
      changeScoreBy(-1);
    },
    getScore() {
      return name + ": " + privateScore;
    },
  };
}
/* Potter! */
const harry = studentHogwarts();
harry.setName("Harry");

for (let cnt = 0; cnt <= 4; cnt++) {
  harry.rewardStudent(1);
}

console.log(harry.getScore());

/* Malfoy! */
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(draco.getScore());