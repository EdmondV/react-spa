import React from 'react'
import {Gmaps, Marker} from 'react-gmaps'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon'

const Aside = ({ fetchCityWeatherByName, weatherLocal }) => {
  return (
    <div className='aside'>
      <div className='aside_content'>
      <span>Текущий город: </span>
        {
          weatherLocal
          ? <div>
              <Gmaps
                width={'220px'}
                height={'220px'}
                lat={weatherLocal.coord.lat}
                lng={weatherLocal.coord.lon}
                zoom={12}>
                <Marker
                  lat={weatherLocal.coord.lat}
                  lng={weatherLocal.coord.lon} />
              </Gmaps>
              <h1 className='city-name'>{weatherLocal.name}</h1>
              <span className='city-author'>
              {
                `Сегодня: Сейчас ${weatherLocal.conditions.join(', ')}.
                Температура воздуха ${weatherLocal.temp}˚C. Ветер ${weatherLocal.windSpeed} м/с.
                Влажность ${weatherLocal.humidity}%`
              }
              </span>
            </div>
          : <PreloaderIcon
              type={ICON_TYPE.TAIL_SPIN}
              size={80}
              strokeWidth={8}
              strokeColor="#dafd53"
              duration={800}
              className='aside-preloader'
            />
        }
      </div>
    </div>
  )
}

export default Aside
