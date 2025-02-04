class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      setInterval(() =>{
        printTimeCallback()
      }, 1000)
    }
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
    }, 1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
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
    return `${minuteString}:${secondString}`;
  }
}
