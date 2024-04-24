export default function createReportObject(employeesList) {
    const allEmployees = {};
  
    for (const department in employeesList) {
  
      if (Object.prototype.hasOwnProperty.call(employeesList, department)) {
        allEmployees[department] = [...employeesList[department]];
      }
    }
  
    return {
      allEmployees,
      getNumberOfDepartments() {
        return Object.keys(allEmployees).length;
      },
    };
  }
