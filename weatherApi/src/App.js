import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import HavaDurumu from "./components/HavaDurumu";
import './App.css'

//import HavaDurumu from "./components/HavaDurumu";
const key = '4bc9e3ec8488c755d87a531291e77d87'
const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
   
    const lang = navigator.language.split("-")[0];

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
      console.log(data);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div>
    <div className="animation">
      <span>W</span>
      <span>E</span>
      <span>A</span>
      <span>T</span>
      <span>H</span>
      <span>E</span>
      <span>R</span>
      
    </div>
      <h2 className="title">Weather APP</h2>
      <HavaDurumu weather={weather} />
    </div>
  );
};

export default App;