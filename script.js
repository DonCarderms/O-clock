(function() {
    loader: document.querySelector(".loader"),
    digital: document.querySelector(".digital"),
    hoursBar: document.querySelector(".hours"),

  const getHours () {
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
    const { hour, minute, second } = getHours();

    digital.innerHTML = `<p>${hour}h ${minute}m ${second}s</p>`;

    loader.style.display = "block";
    loader.style.setProperty(
      "--loaderBeforeTransform",
      `rotate(${second * 6}deg)`
    );
    loader.style.setProperty(
      "--loaderAftereTransform",
      `rotate(${minute * 6}deg)`
    );
    hoursBar.style.setProperty(
      "--loaderHoursTransform",
      `rotate(${hour * 30}deg)`
    );
  }
    loader.style.display = "none";
    setInterval(moverPonteirosRelogio, 1000);
}();

const Relogio = {

};

