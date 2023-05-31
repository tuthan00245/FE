import React from 'react'
import './diss.scss'

const Dropdown = () => {
  return (
    <div className='dropdown'>
      <div className="cate__container">
        <ul className="nav__left">
          <li className="item_first">
            <button>
              motorcycle
            </button>
            <div className="subcategory">
              <ul className="nav__nav-tabs--container">

              </ul>
              <div className="tab__content--container">

              </div>
              <div className="test">
                
              </div>
            </div>
          </li>
          <li className="item">
            <button>atv</button>
          </li>
          <li className="item">
            <button>side x side</button>
          </li>
          <li className="item">
            <button>watercraft</button>
          </li>
          <li className="item">
            <button>electric balance bike</button>
          </li>
        </ul>
        <ul className="nav__right">
          <li className="item">
            <button>experience</button>
          </li>
          <li className="item">
            <button>government & fleet</button>
          </li>
          <li className="item">
            <button>shop</button>  
          </li>
          <li className="item">
            <button>owner center</button>
          </li>
          <li className="item">
            <button>racing</button>
          </li>
          <li className="item">
            <button>research tools</button>
          </li>
        </ul>  
      </div>
    </div>
  )
}

export default Dropdown