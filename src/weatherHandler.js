import dom from "./dom.js";

const weather = (() => {
  async function getWeather(input) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c189ab6335cd68f2875dbec99ef5bed5&units=imperial`
      );
      const weatherData = await response.json();
      dom.city.textContent = `${weatherData.name} 📍`;
      dom.weatherMain.textContent = `${weatherData.weather[0].main}`;
      dom.weatherNum.textContent = `Temp: ${weatherData.main.temp} °F`;
      dom.humidity.textContent = `Humidity: ${weatherData.main.temp_min}`;
      dom.feelsLike.textContent = `Feels Like: ${weatherData.main.temp_max}`;
    } catch (error) {
      result.innerHTML = "";
      console.log(error);
    }
  }

  return {
    getWeather,
  };
})();

export default weather;
