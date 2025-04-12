import React from "react";
import { useState } from "react";
import axios from 'axios';


function App() {
  const [data, setData] = useState({});
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=941e56ed32d5d883bb3b8e092af01045`

  const searchlocation = (event)=>{
    if(event.key === 'Enter'){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);
      console.log("hiii");
    })
  }
  }
  
  return (
    <div className="App">
    <div>
      <input value={lat}
      onChange={event => setLat(event.target.value)}
      /*onKeyPress={searchlocation}*/
      type="text" placeholder="LATITUDE"></input>
    </div>
    <div>
      <input value={long}
      onChange={event => setLong(event.target.value)}
      onKeyPress={searchlocation}
      type="text" placeholder="LONGITUIDE"></input>
    </div>
    <div className="container">
    <div className="top">
      <div className="city">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{(data.main.temp-273.15).toFixed()}°c</h1> :null}
      </div>
      <div className="sky">
        {data.main ? <p>{data.weather[0].main}</p> :null}
      </div>
    </div>



    <div className="bopttom">
      <div className="feels">
        {data.main ? <p>{(data.main.temp-273.15).toFixed()}°c</p> :null}
        <p>Feels</p>
      </div>
      <div className="humidity">
        {data.main ? <p>{data.main.humidity}</p> :null}
        <p>Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? <p>{data.wind.speed} kmph</p> :null}
        <p>Wind</p>
      </div>
    </div>
    </div> 
    </div>
  );
}

export default App;
