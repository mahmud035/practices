import { useState } from 'react'
import { useWeather } from './hooks/useWeather'
import { useGeolocation } from './hooks/useGeolocation'
import CurrentWeather from './components/weather/CurrentWeather'
import Forecast from './components/weather/Forecast'
import SearchBar from './components/weather/SearchBar'
import Skeleton from './components/ui/Skeleton'
import './App.css'

function App() {
  const [searchCity, setSearchCity] = useState<string>('London')
  const [useAutoLocation, setUseAutoLocation] = useState<boolean>(true)
  const { location } = useGeolocation()
  
  // Only use geolocation if available and we are in auto mode
  const lat = useAutoLocation ? location?.lat : undefined
  const lon = useAutoLocation ? location?.lon : undefined
  const city = useAutoLocation ? undefined : searchCity

  const { weather, forecast, loading, error } = useWeather(lat, lon, city)

  const handleSearch = (searchedCity: string) => {
    setSearchCity(searchedCity)
    setUseAutoLocation(false) // When user searches, switch to manual mode
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <Skeleton />}
      
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      {!loading && weather && <CurrentWeather data={weather} />}
      {!loading && forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App
