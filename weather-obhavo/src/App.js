import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/services/api";
import Search from './components/search/Search';
import Forecast from "./components/forecast/Forecast"
import CurrentWeather from './components/current-weather/Current-weather';

function App() {

  const [currentWeather,setCurrentWeather] = useState(null)
  const [forecast,setForecast] = useState(null) 

  const handleOnSearchChange = (searchData) => {
     const [lat,lon] =  searchData.value.split(" ");
    console.log(searchData);
     const currentWeatherFeth = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
     const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    //  const forecastFetch = fetch(`${WEATHER_API_URL}/weather?q=${searchData.label}&appid=${WEATHER_API_KEY}&units=metric`)

     Promise.all([currentWeatherFeth, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()

      setCurrentWeather({city:searchData.label ,...weatherResponse})
      setForecast({city: searchData.label,...forecastResponse})
     }).catch((err) => console.log(err))
  }

  return (
    <div className="app">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
