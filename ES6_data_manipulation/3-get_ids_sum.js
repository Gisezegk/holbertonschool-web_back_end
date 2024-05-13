export default function calculateTotalStudentIds(listOfStudents) {
  const studentIds = listOfStudents.map((student) => student.id);
  const totalIds = studentIds.reduce((accumulator, currentId) => accumulator + currentId, 0);
  return totalIds;
}
