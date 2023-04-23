
const createRelogio = () => {
    const loader = document.querySelector('.loader')
    const digital = document.querySelector('.digital')
    const hoursBar = document.querySelector('.hours')
    loader.style.display = 'none'
    
    const getHours = () => {
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const hour = hours < 10 ? `0${hours}` : hours
        const minute = minutes < 10 ? `0${minutes}` : minutes
        const second = seconds < 10 ? `0${seconds}` : seconds
        return {
            hour,
            minute,
            second,
        }
    }
    const moverPonteirosRelogio = () => {
        const { hour, minute, second } = getHours()
    
        digital.innerHTML = `<p>${hour}h ${minute}m ${second}s</p>`
    
        loader.style.display = 'block'
        loader.style.setProperty('--loaderBeforeTransform', `rotate(${second * 6}deg)`)
        loader.style.setProperty('--loaderAftereTransform', `rotate(${minute * 6}deg)`)
        hoursBar.style.setProperty('--loaderHoursTransform', `rotate(${hour * 30}deg)`)
    }

    return{
        moverPonteirosRelogio,
    }
}
const reloge = createRelogio()
setInterval(reloge.moverPonteirosRelogio, 1000);
