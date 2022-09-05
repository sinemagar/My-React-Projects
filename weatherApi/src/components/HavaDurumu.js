const HavaDurumu = (props) => {
    const { weather } = props;
  
    if (!weather) {
      return <p>
  You need to allow location access......</p>;
    }
  
    return (
      <div className="container">
        <div className="main-container">
        <h3 className="city-name">{weather.name}</h3>
        <h4 className="result">{weather.weather.map((data) => data.description).join(", ")}
        
        </h4>
        

        <p className="temp">{weather.main.temp} ℃</p>
        <p className="temp">Fells Like: {weather.main.feels_like} ℃</p>
        <p className="date">{new Date(weather.dt * 1000).toLocaleDateString()}</p>
        
      </div></div>
    );
  };
  
  export default HavaDurumu;