import React from 'react'
import WeatherCard from './weather-card'

const WeatherList = ({ weather, fetchExpandedCityWeather, addToFavorites, favorites }) => {
  const list = weather.map((data, i) => {
    return (
      <WeatherCard
        fetchExpandedCityWeather={fetchExpandedCityWeather}
        key={i}
        id={i}
        data={data}
        addToFavorites={addToFavorites}
        favorites={favorites}
      />
    )
  })
  return (
    <div className='citys-list'>
      {list}
    </div>
  )
}

export default WeatherList
