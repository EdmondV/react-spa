import React from 'react'
import Input from '../common/input'
import { removeClass, addClass } from '../helpers/class-helper'

const SearchModule = ({ weather }) => {
  const searchInfo = (data) => {
    weather.filter((city, i) => {
      city.name.toLowerCase().includes(data.toLowerCase())
      ? removeClass('#card_', i + city.cityId)
      : addClass('#card_', i + city.cityId)
    })
  }

  return (
    <div className='module'>
      <span>Поиск:</span>
      <Input onChange={(event) => searchInfo(event.target.value)} />
    </div>
  )
}

export default SearchModule
