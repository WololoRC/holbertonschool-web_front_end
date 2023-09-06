function createClassRoom (numbersOfStudents) {
/*
* Create an array and returns desired position
* @numberOfStudents: {number} - number os students.
*/
  function studentSeat (seat) {
    return function () {
      return seat;
    };
  }

  const students = [];

  for (let cnt = 0; cnt <= numbersOfStudents; cnt++) {
    students.push(studentSeat(cnt + 1));
  }

  return students;
}

const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
