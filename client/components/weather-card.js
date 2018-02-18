import React from 'react'
import WeatherIcon from './weather-icon'
import { Link } from 'react-router-dom'

const WeatherCard = ({ data, id, fetchExpandedCityWeather, addToFavorites, favorites }) => {
  const renderIcons = data.icon.map((icon, i) => {
    return (
      <WeatherIcon key={i} src={`icons/sw-${icon}.svg`} />
    )
  })
  const star = `icons/star.png`,
        favorite = `icons/Exclusive_star.png`
  return (
    <div className='city-card' id={`card_${id + data.cityId}`}>
      <Link to='/info' onClick={() => fetchExpandedCityWeather(data.cityId)}>
        <div className='city-card_content'>
          <h1 className='city-name'>{data.name}</h1>
          <h2 className='city-author'>{data.temp}˚C</h2>
        </div>
        <div className='icons'>{renderIcons}</div>
      </Link>
      <WeatherIcon
        className='star'
        src={favorites.includes(data.cityId) ? favorite : star}
        onClick={() => addToFavorites(data.cityId)}
      />
    </div>
  )
}

export default WeatherCard
