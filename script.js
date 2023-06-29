const Relogio = {
  loader: document.querySelector(".loader"),
  digital: document.querySelector(".digital"),
  hoursBar: document.querySelector(".hours"),
  init() {
    Relogio.loader.style.display = "none";
    setInterval(Relogio.moverPonteirosRelogio, 1000);
  },
  getHours() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return {
      hour: hours < 10 ? `0${hours}` : hours,
      minute: minutes < 10 ? `0${minutes}` : minutes,
      second: seconds < 10 ? `0${seconds}` : seconds
    };
  },
  moverPonteirosRelogio() {
    const { hour, minute, second } = Relogio.getHours();

    Relogio.digital.innerHTML = `<p>${hour}h ${minute}m ${second}s</p>`;

    Relogio.loader.style.display = "block";
    Relogio.loader.style.setProperty(
      "--loaderBeforeTransform",
      `rotate(${second * 6}deg)`
    );
    Relogio.loader.style.setProperty(
      "--loaderAftereTransform",
      `rotate(${minute * 6}deg)`
    );
    Relogio.hoursBar.style.setProperty(
      "--loaderHoursTransform",
      `rotate(${hour * 30}deg)`
    );
  }
};
Relogio.init();
