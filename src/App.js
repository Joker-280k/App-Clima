import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApp.css";
import {getAuth, signInAnonymously} from "firebase-auth";
import {getToken, onMessage} from "firebase/messaging";
import { Messaging } from "./firebase";
import {ToastContainer, toast} from 'react-toastify';

function App() {
  const login = ()=>{
    signInAnonymously(getAuth()).then(usuario => console.log(usuario));
  }

  const activarMesansajes = async ()=>{
    const tok = await getToken(messaging, {
      vapidKey: ""
    }).catch(error => console.log("error al generar el token"));

    if(token) console.log("Este es tu token: " + token);
    if(!token) console.log("No tienes token paps")
  }

  React.useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("Tu Mensaje: ", message);
      toast(message.notification.title);
    })
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
      <ToastContainer/>
      <button onClick={login}>Logearse</button>
      <button onClick={activarMensajes}>Generar Token</button>
    </div>
  );
}

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "e97e2746601816c2e0fa9aa328f3a131";
  const cities = ["London", "New York", "Tokyo", "Paris", "Sydney"];

  useEffect(() => {
    const fetchData = async () => {
      const promises = cities.map(city =>
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=e97e2746601816c2e0fa9aa328f3a131`)
      );
      const results = await Promise.all(promises);
      const data = results.map(result => result.data.list);
      setWeatherData(data);
    };
    fetchData();
  }, []);

  if (!weatherData.length) return <div>Loading...</div>;

  return (
    <div className="weather-container">
      {weatherData.map((cityData, index) => (
        <div key={index} className="city-card">
          <h2 className="city-name">{cities[index]}</h2>
          <div className="weather-data">
            {cityData.map((data, index) => (
              <div key={index} className="weather-card">
                <h3>{new Date(data.dt_txt).toLocaleDateString()}</h3>
                <p>Temperature: {data.main.temp} Kelvin</p>
                <p>Weather: {data.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherApp;
