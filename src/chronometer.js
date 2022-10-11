class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      setInterval(() =>{
        printTimeCallback()
      },1000)
    }
    setInterval(()=>{
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
    
  }

  stop() {
    
  }

  reset() {
    
  }

  split() {
    
  }
}
