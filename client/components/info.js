import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import WeatherIcon from './weather-icon'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon'

const Info = ({ weatherExpanded }) => {
  return (
    <div>
    {
      weatherExpanded
      ? <div className='info'>
          <Link to='/'>Назад</Link>
          <div className='city-card_content'>
            <h1 className='city-name'>{weatherExpanded.name}</h1><br />
            <span className='city-author'>Температура: {weatherExpanded.temp}˚C</span><br />
            <span className='city-author'>Погодные условия: {weatherExpanded.conditions.join(', ')}</span><br />
            <span className='city-author'>Максимальная температура: {weatherExpanded.temp_max}˚C</span><br />
            <span className='city-author'>Минимальная температура: {weatherExpanded.temp_min}˚C</span><br />
            <span className='city-author'>Ветер: {weatherExpanded.windSpeed} м/с</span><br />
            <span className='city-author'>Восход солнца: {weatherExpanded.sunrise}</span><br />
            <span className='city-author'>Закат: {weatherExpanded.sunset}</span><br />
            <span className='city-author'>Влажность: {weatherExpanded.humidity}%</span><br />
            <span className='city-author'>Давление: {weatherExpanded.pressure} мм рт. ст.</span><br />
            {
              weatherExpanded.visibility &&
              <span className='city-author'>Видимость: {weatherExpanded.visibility} км</span>
            }
          </div>
          <div className='icons'>
            {
              weatherExpanded.icon.map((icon, i) => {
                return (
                  <WeatherIcon key={i} src={`icons/sw-${icon}.svg`} />
                )
              })
            }
          </div>
        </div>
      : <PreloaderIcon
          type={ICON_TYPE.TAIL_SPIN}
          size={80}
          strokeWidth={8}
          strokeColor="#3153c5"
          duration={800}
          className='main-preloader'
        />
    }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    weatherExpanded: state.req.weatherExpanded,
  }
}

export default connect(mapStateToProps)(Info)
