import React from 'react'

import { UserOutlined,ShoppingCartOutlined,ShoppingOutlined} from '@ant-design/icons';
import { Avatar, Space } from 'antd';

import './diss.scss'


const Navbar = () => {
  return (
    <>
      <div className="container__fortop">
        <div className="navbar__brand">
          <a href="">logo</a>
        </div>
        <div className="rightbar">
          <ul className="list__inline">
            <li className="list__inline-item">
              <Space wrap size={16}>
                <a href="" className="nav__link">
                  <Avatar style={{ backgroundColor: '#87d068' }} size={32} icon={<UserOutlined/>} />
                  <div className="item">kawasaki</div>
                </a>
              </Space>
            </li>
            <li className="list__inline-item">
              <Space wrap size={16}>
                <a href="" className="nav__link">
                  <Avatar style={{ backgroundColor: '#87d068' }} size={32} icon={<ShoppingCartOutlined/>} />
                  <div className="item">Cart</div>
                </a>
              </Space>
            </li>
            <li className="list__inline-item">
              <Space wrap size={16}>
                <a href="" className="nav__link">
                  <Avatar style={{ backgroundColor: '#87d068' }} size={32} icon={<ShoppingOutlined/>} />
                  <div className="item">Wishlist</div>
                </a>
              </Space>
            </li>
            <li className="list__inline-item">
              <Space wrap size={16}>
                <a href="" className="nav__link">
                  <Avatar style={{ backgroundColor: '#87d068' }} size={32} icon={<ShoppingOutlined/>} />
                  <div className="item">Test Rider</div>
                </a>
              </Space>
            </li>
            <li className="list__inline-item">
              <Space wrap size={16}>
                <a href="" className="nav__link">
                  <Avatar style={{ backgroundColor: '#87d068' }} size={32} icon={<ShoppingOutlined/>} />
                  <div className="item">Locate a dealer</div>
                </a>
              </Space>
            </li>
            <li className="list__inline-item">
              <div className="group">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input className="input" type="search"  placeholder="Search"/>
            </div>

            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar