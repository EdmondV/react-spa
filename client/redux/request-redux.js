 import { createReducer, createActions } from 'reduxsauce'

 const { Types, Creators } = createActions({
  updateState: ['data'],
  fetchCityWeatherByIds: ['page'],
  fetchCityWeatherByLocation: ['location'],
  fetchExpandedCityWeather: ['id'],
  addToFavorites: ['id'],
})

export const RequestsTypes = Types
export default Creators

export const INITIAL_STATE = {
  cityIds: ['551487','1497337','498817','1486209','1508291','511196','499099','542420','561667','540259','1502026','524901'],
  favorites: JSON.parse(localStorage.getItem('/favorites')) || [],
  weather: [],
  weatherExpanded: null,
  weatherLocal: null,
  sortObj: JSON.parse(localStorage.getItem('/sort')) || { field: '', type: null },
  perPage: 5,
  page: 0,
  isFetching: false,
}

export const updateState = (state, { data }) => {
  return { ...state, ...data }
}

export const addToFavorites = (state, { id }) => {
  const newFavorites = [...state.favorites],
        index = newFavorites.indexOf(id)
  if (~index) {
    newFavorites.splice(index, 1)
  } else {
    newFavorites.push(id)
  }
  localStorage.setItem('/favorites', JSON.stringify(newFavorites))
	return { ...state, favorites: newFavorites }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STATE]: updateState,
  [Types.ADD_TO_FAVORITES]: addToFavorites,
})

export const getCityIds = () => INITIAL_STATE.cityIds,
             getPerPage = () => INITIAL_STATE.perPage,
             getFavorites = () => INITIAL_STATE.favorites,
             getPage = () => INITIAL_STATE.page
