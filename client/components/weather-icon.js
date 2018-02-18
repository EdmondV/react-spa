import React from 'react'

const WeatherIcon = ({ src, className='weather-icon', ...rest }) => {
  return (
    <img className={className} src={src} alt="" {...rest} />
  )
}

export default WeatherIcon
