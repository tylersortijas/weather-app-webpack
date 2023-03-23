import weather from "./weatherHandler.js";

const dom = (() => {
  // API Weather Key: c189ab6335cd68f2875dbec99ef5bed5
  const search = document.querySelector("#search");
  const button = document.querySelector("button");
  const result = document.querySelector("#result");

  // Weather Card
  const city = document.createElement("h2");
  const weatherMain = document.createElement("h3");
  const weatherNum = document.createElement("h3");
  const humidity = document.createElement("p");
  const feelsLike = document.createElement("p");

  button.addEventListener("click", (e) => {
    if (search.value.length === 0) {
      alert("Please enter a city");
    } else {
      result.style.display = "block";
      e.preventDefault();
      weather.getWeather(search);
      createWeatherCard();
    }
  });

  function createWeatherCard() {
    result.appendChild(city);
    city.classList.add("city-name");
    result.appendChild(weatherMain);
    weatherMain.classList.add("weather-name");
    result.appendChild(weatherNum);
    weatherNum.classList.add("temperature");
    result.appendChild(humidity);
    humidity.classList.add("humidity");
    result.appendChild(feelsLike);
    feelsLike.classList.add("feels-like");
  }

  return {
    createWeatherCard,
    city,
    weatherMain,
    weatherNum,
    humidity,
    feelsLike,
  }
})();

export default dom;
