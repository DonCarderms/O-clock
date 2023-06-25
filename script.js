const getHour = () => {
        date : new Date()
        hours :date.getHours()
        minutes : date.getMinutes()
        seconds : date.getSeconds()
        hour : hours < 10 ? `0${hours}` : hours
        minute : minutes < 10 ? `0${minutes}` : minutes
        second : seconds < 10 ? `0${seconds}` : seconds
    return {
        hour,
        minute,
        second,
    }
}

const createRelogio = () => {
     loader : document.querySelector('.loader')
     digital : document.querySelector('.digital')
     hoursBar : document.querySelector('.hours')
     this.loader.style.display = 'none'

     moverPonteirosRelogio () {
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
