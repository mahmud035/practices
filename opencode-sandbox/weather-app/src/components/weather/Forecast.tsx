import React from 'react';
import { ForecastData } from '../../types/weather';
import { format } from 'date-fns';

interface ForecastProps {
  data: ForecastData;
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  const dailyForecast = data.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecast.map((item) => (
          <div key={item.dt} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col items-center">
            <p className="font-semibold text-gray-700">{format(new Date(item.dt * 1000), 'EEE')}</p>
            <p className="text-xs text-gray-500 mb-2">{format(new Date(item.dt * 1000), 'MMM d')}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="w-16 h-16"
            />
            <p className="text-xl font-bold text-blue-600">{Math.round(item.main.temp)}°C</p>
            <p className="text-sm text-gray-500 capitalize mt-1">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
