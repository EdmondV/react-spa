import React from 'react'
import classNames from 'classnames'
import Button from '../common/button'

const FilterModule = ({ titleSort, updateState, sortObj }) => {

  const chooseSort = (field, type) => {
    switch (type) {
      case null:
        updateState({ sortObj: { field: field, type: 'asc' } })
        addToLocalStorage(field, 'asc')
        break
      case 'asc':
        updateState({ sortObj: { field: field, type: 'desc' } })
        addToLocalStorage(field, 'desc')
        break
      case 'desc':
        updateState({ sortObj: { field: field, type: null } })
        addToLocalStorage(field, null)
        break
    }
  }

  const addToLocalStorage = (field, type) => {
    localStorage.setItem('/sort', JSON.stringify({ field: field, type: type }))
  }

  const authorArrowClasses = classNames('btn', {
    'btn_down': sortObj.type === 'asc' && sortObj.field === 'name',
    'btn_up': sortObj.type === 'desc' && sortObj.field === 'name',
  })

  const titleArrowClasses = classNames('btn', {
    'btn_down': sortObj.type === 'asc' && sortObj.field === 'temp',
    'btn_up': sortObj.type === 'desc' && sortObj.field === 'temp',
  })

  return (
    <div className='module'>
      <span>Сортировать:</span>
      <Button
        className={authorArrowClasses}
        onClick={() => chooseSort('name', sortObj.type)}>По городу </Button>
      <Button
        className={titleArrowClasses}
        onClick={() => chooseSort('temp', sortObj.type)}>По температуре </Button>
    </div>
  )
}

export default FilterModule
