import moment from 'moment';
const UNICODE_MINUS = '\u2212'
const RETRY_INTERVAL = 5000
const APPID = '9ac35753003fc9b75d6f77551d551e87'
const defaultURL = 'http://api.openweathermap.org/data/2.5/'

export const getCityGroup = (name) => {
  name.toString()
  const req = `${defaultURL}group?id=${name}&appid=${APPID}&units=metric&lang=ru`
  return fetch(req)
    .then(response => {
      return response.json()
    })
    .then(json => parseResponseArray(json))
}

export const getCityByLocation = (location) => {
  const req = `${defaultURL}weather?lat=${location.lat}&lon=${location.lon}&appid=${APPID}&units=metric&lang=ru`
  return fetch(req)
    .then(response => {
      return response.json()
    })
    .then(json => parseResponseObject(json))
}

export const getExpandedWeather = (id) => {
  const req = `${defaultURL}weather?id=${id}&appid=${APPID}&units=metric&lang=ru`
  return fetch(req)
    .then(response => {
      return response.json()
    })
    .then(json => parseResponseObject(json))
}

const formatTime = (timestamp) => {
  return moment.unix(timestamp).format('H:mm');
}

const parseResponseArray = (json) => {
  if (json.cod === '404') {
    return {error: 'City not found.'};
  }
  return json.list.map((item) => createObject(item))
}

const parseResponseObject = (json) => {
  if (json.cod === '404') {
    return {error: 'City not found.'};
  }
  return createObject(json)
}

const createObject = (json) => {
  return {
    ok: true,
    name: json.name,
    cityId: String(json.id),
    coord: json.coord,
    temp: formatNumber(json.main.temp),
    temp_max: formatNumber(json.main.temp_max),
    temp_min: formatNumber(json.main.temp_min),
    pressure: json.main.pressure,
    humidity: json.main.humidity,
    visibility: json.visibility ? json.visibility/1000 : null,
    sunrise: formatTime(json.sys.sunrise),
    sunset: formatTime(json.sys.sunset),
    windSpeed: json.wind.speed,
    conditions: json.weather.map((item) => item.description),
    icon: json.weather.map((item) => item.icon.replace(/[dn]$/, ''))
  }
}

const formatNumber = (number) => {
	return Math.round(number)
}
