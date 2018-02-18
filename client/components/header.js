import React from 'react'

const Header = ({ updateState, location }) => {
  return (
    <header>
      <span
        className={location === 'Events' ? 'link header-link_active' : 'link header-link'}
        onClick={() => {
          localStorage.setItem('location', 'Events')
          updateState({ location: 'Events' })
        }}
      >События</span>
      <span
        className={location === 'Favorites' ? 'link header-link_active' : 'link header-link'}
        onClick={() => {
          localStorage.setItem('location', 'Favorites')
          updateState({ location: 'Favorites' })
        }}
      >Избранное</span>
    </header>
  )
}

export default Header
