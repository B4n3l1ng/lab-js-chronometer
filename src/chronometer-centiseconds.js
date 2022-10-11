class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      setInterval(() =>{
        printTimeCallback()
      }, 10)
    }
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor(((this.currentTime%6000))/100);
  }

  getCentiseconds() {
    return Math.floor(((this.currentTime%6000)%100));
  }

  computeTwoDigitNumber(value) {
    let string = JSON.stringify(value);
    if (string.length === 2){
      return string;
    } else {
      let paddedString = "0" + string.slice(0);
      return paddedString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    let minuteString = this.computeTwoDigitNumber(this.getMinutes());
    let secondString = this.computeTwoDigitNumber(this.getSeconds());
    let csecondString= this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minuteString}:${secondString}.${csecondString}`;
  }
}
