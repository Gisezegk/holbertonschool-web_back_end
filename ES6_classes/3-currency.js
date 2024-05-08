export default class Currency {
  constructor(code = '', name = '') {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  set code(Code) {
    if (typeof Code !== 'string') {
      throw TypeError('Code must by a String');
    }
    this._code = Code;
  }
  
    set name(Name) {
      if (typeof Name !== 'string') {
        throw TypeError('Name must by a String');
      }
      this._name = Name;
    }
  
    get code() {
      return this._code;
    }

  get name() {
    return this._name;
  }
}
