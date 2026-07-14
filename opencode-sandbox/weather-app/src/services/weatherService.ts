import axios, { AxiosError } from 'axios';
import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const handleApiError = (error: AxiosError) => {
  if (error.response) {
    if (error.response.status === 404) {
      throw new Error('City not found');
    } else if (error.response.status === 401) {
      throw new Error('Invalid API key');
    }
  }
  throw new Error('An error occurred while fetching weather data');
};

export const weatherService = {
  getCurrentWeather: async (lat: number, lon: number): Promise<WeatherData> => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: { lat, lon, appid: API_KEY, units: 'metric' },
      });
      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  },

  getForecast: async (lat: number, lon: number): Promise<ForecastData> => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: { lat, lon, appid: API_KEY, units: 'metric' },
      });
      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  },

  getWeatherByCity: async (city: string): Promise<WeatherData> => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: { q: city, appid: API_KEY, units: 'metric' },
      });
      return response.data;
    } catch (error: any) {
      return handleApiError(error);
    }
  }
};
