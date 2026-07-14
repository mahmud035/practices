import { useState, useEffect } from 'react';
import { WeatherData, ForecastData } from '../types/weather';
import { weatherService } from '../services/weatherService';

export const useWeather = (lat?: number, lon?: number, city?: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let weatherData: WeatherData;
        let forecastData: ForecastData;

        // Note: OpenWeatherMap API requires lat/lon for forecast or city name.
        // For simplicity, we are fetching by city name first to get lat/lon or just fetch by city if possible.
        // To strictly follow the service, we'd need a geocoding step if we only have city name.
        // Let's assume for now we have a way to fetch both. 
        // A better approach would be to use geocoding first. 
        // For now, let's keep it simple: 
        if (lat !== undefined && lon !== undefined) {
          weatherData = await weatherService.getCurrentWeather(lat, lon);
          forecastData = await weatherService.getForecast(lat, lon);
        } else if (city) {
          weatherData = await weatherService.getWeatherByCity(city);
          // For forecast by city, we need to geocode first or use the city query directly if supported.
          // OpenWeatherMap forecast supports 'q' parameter.
          // Let's update service to support forecast by city if needed or just use lat/lon.
          // Quick fix: Assuming weatherService can be extended, but for now just use what's available.
          // Actually, let's just fetch forecast by lat/lon from the weatherData.coord
          forecastData = await weatherService.getForecast(weatherData.coord.lat, weatherData.coord.lon);
        } else {
          return;
        }
        setWeather(weatherData);
        setForecast(forecastData);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lat, lon, city]);

  return { weather, forecast, loading, error };
};
