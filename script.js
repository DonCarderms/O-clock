const getHour = () => {
         this.date = new Date()
         this.hours = this.date.getHours()
         this.minutes = this.date.getMinutes()
         this.seconds = this.date.getSeconds()
         // this.hour = this.hours < 10 ? `0${hours}` : this.hours
         // this.minute = this.minutes < 10 ? `0${minutes}` : this.minutes
         // this.second = this.seconds < 10 ? `0${seconds}` : this.seconds
        
        return {
            hour : hours < 10 ? `0${hours}` : hours,
            minute : minutes < 10 ? `0${minutes}` : minutes,
            second : seconds < 10 ? `0${seconds}` : seconds,
        }
}

const createRelogio = () => {
     this.loader = document.querySelector('.loader')
     this.digital = document.querySelector('.digital')
     this.hoursBar = document.querySelector('.hours')
     this.loader.style.display = 'none'

     this.moverPonteirosRelogio =  () => {
        const { hour, minute, second } = getHours()
    
        digital.innerHTML = `<p>${hour}h ${minute}m ${second}s</p>`
    
        this.loader.style.display = 'block'
        this.loader.style.setProperty('--loaderBeforeTransform', `rotate(${second * 6}deg)`)
        this.loader.style.setProperty('--loaderAftereTransform', `rotate(${minute * 6}deg)`)
        this.hoursBar.style.setProperty('--loaderHoursTransform', `rotate(${hour * 30}deg)`)
    }

    return{
        moverPonteirosRelogio,
    }
}
const reloge = createRelogio()
setInterval(reloge.moverPonteirosRelogio, 1000);
