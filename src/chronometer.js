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
    
  }

  getSeconds() {
    
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
