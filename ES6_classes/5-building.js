export default class Building {
    constructor(sqft) {
      this._sqft = sqft;
      if (this.constructor !== Building && !this.evacuationWarningMessage) {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    get sqft() {
      return this._sqft;
    }
  
    set sqft(Sqft) {
      if (typeof Sqft === 'number') {
        this._sqft = Sqft;
      } else {
        throw TypeError('Sqft must by a number');
      }
    }
  }
