import React from 'react'
import Headers from './styledHeader'
import Nav from './Nav'

const Header = () => {
  return (
    <Headers>
      <div className="container-title">
          <h2>Smart Estoque</h2>
          <p>Gerencie seu estoque</p>
      </div>
      <Nav/>
    </Headers>
  )
}

export default Header
