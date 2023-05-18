import { useState } from "react";
import CurrentWeather from "./components/Current-weather/Current-weather";
import Search from "./components/Search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./services/api.services";
import Forecast from "./components/forecast/Forecast";

function App() {

  const [currentWeather,setCurrentWeather] = useState(null)
  const [forecast,setForecast] = useState(null) 

  const handleOnSearchChange = (searchData) => {
     const [lat,lon] =  searchData.value.split(" ");

     const currentWeatherFeth = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
     const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

     Promise.all([currentWeatherFeth, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()


      setCurrentWeather({city:searchData.label ,...weatherResponse})
      setForecast({city: searchData.label,...forecastResponse})
     }).catch((err) => console.log(err))
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="app">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <Forecast />
    </div>
  );
}

export default App;
