export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
  
  set name(Name) {
    if (typeof Name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = Name;
  }
  
  set length(Length) {
    if (typeof Length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = Length;
  }
  
  set students(Students) {
    if (Array.isArray(Students)
            && Students.every((student) => (typeof student === 'string') === true)) {
      this._students = Students;
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }
  
  get name() {
    return this._name;
  }
  
  get length() {
    return this._length;
  }
  
  get students() {
    return this._students;
  }
}
