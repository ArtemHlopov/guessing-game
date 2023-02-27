class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minNumber = min;
    this.maxNumber = max;
  }

  guess() {
    return (this.number = Math.round((this.maxNumber + this.minNumber) / 2));
  }

  lower() {
    this.maxNumber = this.number;
  }

  greater() {
    this.minNumber = this.number;
  }
}

module.exports = GuessingGame;
