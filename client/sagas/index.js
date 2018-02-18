import { takeLatest } from 'redux-saga/effects'
import { RequestsTypes } from '../redux/request-redux'

import * as weather from './weather-sagas'

/**
 * Генератор sagas
 */
export function * sagas () {
  yield [
    takeLatest(RequestsTypes.FETCH_CITY_WEATHER_BY_IDS, weather.fetchCityWeatherByIds),
    takeLatest(RequestsTypes.FETCH_CITY_WEATHER_BY_LOCATION, weather.fetchCityWeatherByLocation),
    takeLatest(RequestsTypes.FETCH_EXPANDED_CITY_WEATHER, weather.fetchExpandedCityWeather),
  ]
}
