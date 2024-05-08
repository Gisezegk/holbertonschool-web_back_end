export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(val) {
    if (typeof val !== 'number') throw TypeError('size must by a number');
  }

  set location(val) {
    if (typeof val !== 'string') throw TypeError('location must by a string');
    this._location = val;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
