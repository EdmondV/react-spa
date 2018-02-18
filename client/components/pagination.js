import React from 'react'
import Button from '../common/button'

const Pagination = ({ page, pages, updateState, fetchCityWeatherByIds }) => {
  return (
    <span className='pagination'>
    {
      page > 0 &&
      <Button onClick={() => {
        updateState({ page: page - 1, isFetching: false })
        fetchCityWeatherByIds(page - 1)
      }}>{'<- Prev '}</Button>
    }
    <h2>{page + 1}</h2>
    {
      page < pages - 1 &&
      <Button onClick={() => {
        updateState({ page: page + 1, isFetching: false })
        fetchCityWeatherByIds(page + 1)
      }}>{' Next ->'}</Button>
    }
    </span>
  )
}

export default Pagination
