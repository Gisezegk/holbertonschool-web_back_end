export default function getStudentsByLocation(studentsList, targetCity) {
  return studentsList.filter((student) => student.location === targetCity);
}
