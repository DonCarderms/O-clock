{
  const loader = document.querySelector(".loader");
  const digital = document.querySelector(".digital");
  const hoursBar = document.querySelector(".hours");

  const getHours = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return {
      hour: hours < 10 ? `0${hours}` : hours,
      minute: minutes < 10 ? `0${minutes}` : minutes,
      second: seconds < 10 ? `0${seconds}` : seconds
    };
  }

  const displayDigital = () => {
    const { hour, minute, second } = getHours();
    const content = document.createElement('p')
    content.innerText = `${hour}h ${minute}m ${second}s`
    digital.appendChild(content)
  }

  const moveReloge = () => {
    const { hour, minute, second } = getHours();
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
  setInterval(moveReloge, 1000);
  displayDigital()
}