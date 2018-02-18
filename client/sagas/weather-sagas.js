import { call, put, select } from 'redux-saga/effects'
import RequestsActions, { getCityIds, getPerPage, getFavorites } from '../redux/request-redux'
import { getCityGroup, getCityByLocation, getExpandedWeather } from '../service/api'

export function * fetchCityWeatherByIds ({ page = 0 }) {
  let sorted = []
  const cityIds = yield select(getCityIds),
        perPage = yield select(getPerPage),
        favorites = yield select(getFavorites)
  sorted = sortFavorites(cityIds, favorites)
  sorted = arrayTruncation(sorted, page, perPage)
  const request = yield call(() => getCityGroup(sorted))
  if (request.length) {
    yield put(RequestsActions.updateState({ weather: request, isFetching: true }))
  }
}

export function * fetchCityWeatherByLocation ({ location }) {
  const request = yield call(() => getCityByLocation(location))
  if (request.ok) {
    yield put(RequestsActions.updateState({ weatherLocal: request }))
  }
}

export function * fetchExpandedCityWeather ({ id }) {
  const request = yield call(() => getExpandedWeather(id))
  if (request.ok) {
    yield put(RequestsActions.updateState({ weatherExpanded: request }))
  }
}

const sortFavorites = (arrayA, arrayB) => {
  const top = [],
        bot = []
  arrayA.map((id) => {
    if (arrayB.includes(id)) {
      top.push(id)
    } else {
      bot.push(id)
    }
  })
  return [...top, ...bot]
}

const arrayTruncation = (array, page, perPage) => {
  return array.slice(page * perPage, page * perPage + perPage)
}
