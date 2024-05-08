export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
  
  set name(val) {
    if (typeof val !== 'string') throw TypeError('Name must by a string');
    this._name = val;
  }

  set code(val) {
    if (typeof val !== 'string') throw TypeError('Code must by a string');
    this._code = val;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
