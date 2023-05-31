import React from 'react'
import './diss.scss'
import Linear from '../Linear/Linear'
import Navbar from '../Navbar/Navbar'
import Dropdown from '../Dropdown/Dropdown'
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="top__header">
          <Navbar/>
        </div>
        <Linear/>
        <div className="bottom__header">
          <Dropdown/>
        </div>
      </div>
    </>
  )
}

export default Header