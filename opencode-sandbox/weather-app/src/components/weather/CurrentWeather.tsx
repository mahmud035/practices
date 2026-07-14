import React from 'react';
import { WeatherData } from '../../types/weather';

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h2>
      <div className="flex items-center justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="w-24 h-24"
        />
        <p className="text-6xl font-extrabold text-blue-600">{Math.round(data.main.temp)}°C</p>
      </div>
      <p className="text-xl text-gray-600 capitalize mb-6">{data.weather[0].description}</p>
      <div className="grid grid-cols-3 gap-6 w-full text-center border-t pt-6">
        <div>
          <p className="text-sm text-gray-500">Feels Like</p>
          <p className="text-lg font-semibold">{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Humidity</p>
          <p className="text-lg font-semibold">{data.main.humidity}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Wind</p>
          <p className="text-lg font-semibold">{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
