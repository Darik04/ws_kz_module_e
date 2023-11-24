
const stylesCountDown = `
.countdown{
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin: 30px;
    font-family: Arial, Helvetica, sans-serif;
}
.message{
    margin: 10px 0;
}
.countdown h2{
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
}
`
class CountDown extends HTMLElement{
    constructor () {
        super()
        const rootCD = this.attachShadow({ mode: 'open' })

        const countDownEl = document.createElement('div')
        const h1El = document.createElement('h1')
        const messageEl = document.createElement('div')
        const counterEl = document.createElement('div')
        const styleEl = document.createElement('style')

        h1El.innerHTML = 'CountDown'

        messageEl.classList.add('message')
        // if(this.getDate){
        //     messageEl.innerHTML = this.getDate
        // }

        countDownEl.classList.add('countdown')

        styleEl.innerHTML = stylesCountDown


        this._messageEl = messageEl
        this._counterEl = counterEl
        countDownEl.appendChild(h1El)
        countDownEl.appendChild(this._messageEl)
        countDownEl.appendChild(this._counterEl)
        rootCD.appendChild(countDownEl)
        rootCD.appendChild(styleEl)

        this.startCountdown(new Date(this.getDate ?? (Date.now() + 15 * 1000)))
    }



    get getDate(){
        return this.getAttribute('date')
    }
    get getMessage(){
        return this.getAttribute('message') ?? 'Done'
    }


    startCountdown(targetDate) {
    
        const updateInterval = setInterval(() => {
          const now = new Date();
          const timeRemaining = Math.max(0, Math.floor((targetDate - now) / 1000));

          if (timeRemaining === 0) {
            clearInterval(updateInterval);
            this._messageEl.textContent = this.getMessage;
            // this._counterEl.textContent = ''
          } else {
            this._counterEl.textContent = this.formatTimeRemaining(timeRemaining) + ' left';
          }
        }, 1000);
      }


    formatTimeRemaining(time) {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;
    
        return `${days} days ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
}

customElements.define('count-down', CountDown)