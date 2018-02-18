import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherList from './weather-list'
import SearchModule from './search-module'
import SortModule from './sort-module'
import { sortField } from '../helpers/sort-helper'
import RequestsActions from '../redux/request-redux'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon'
import Aside from './aside'
import Pagination from './pagination'
import '../style/main.css'

class Main extends Component {
  componentDidMount () {
    const {
      fetchCityWeatherByLocation,
      fetchCityWeatherByIds,
      weatherLocal,
      updateState,
      weather,
      cityIds,
    } = this.props
    if (!weather.length && cityIds.length) {
      fetchCityWeatherByIds()
    }
    if ("geolocation" in navigator && !weatherLocal) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude.toFixed(3),
              lon = position.coords.longitude.toFixed(3)
        return fetchCityWeatherByLocation({ lat: lat, lon: lon })
      })
    }
  }
  render () {
    const {
      fetchExpandedCityWeather,
      fetchCityWeatherByIds,
      addToFavorites,
      weatherLocal,
      updateState,
      cityIds,
      favorites,
      page,
      weather,
      sortObj,
      isFetching,
      pages = Math.ceil(cityIds.length / 5),
      sortedWeather = sortObj && sortObj.type
                      ? weather.sort(sortField(sortObj.field, sortObj.type))
                      : weather
    } = this.props
    return (
      <div className='app'>
        <Aside
          weatherLocal={weatherLocal}
        />
        <div className='right-block'>
          <div className='modules'>
            <SearchModule weather={weather} />
            <SortModule
              sortObj={sortObj}
              updateState={updateState}
            />
          </div>
          <WeatherList
            addToFavorites={addToFavorites}
            fetchExpandedCityWeather={fetchExpandedCityWeather}
            weather={sortedWeather}
            favorites={favorites}
          />
          {
            !isFetching &&
              <PreloaderIcon
                type={ICON_TYPE.TAIL_SPIN}
                size={80}
                strokeWidth={8}
                strokeColor="#3153c5"
                duration={800}
                className='main-preloader'
              />
          }
          <Pagination
            page={page}
            pages={pages}
            updateState={updateState}
            fetchCityWeatherByIds={fetchCityWeatherByIds}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    weather: state.req.weather,
    cityIds: state.req.cityIds,
    weatherLocal: state.req.weatherLocal,
    page: state.req.page,
    sortObj: state.req.sortObj,
    isFetching: state.req.isFetching,
    favorites: state.req.favorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateState: (data) => dispatch(RequestsActions.updateState(data)),
    fetchCityWeatherByIds: (page) => dispatch(RequestsActions.fetchCityWeatherByIds(page)),
    fetchCityWeatherByLocation: (location) =>
      dispatch(RequestsActions.fetchCityWeatherByLocation(location)),
    fetchExpandedCityWeather: (id) =>
      dispatch(RequestsActions.fetchExpandedCityWeather(id)),
    addToFavorites: (id) => dispatch(RequestsActions.addToFavorites(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
