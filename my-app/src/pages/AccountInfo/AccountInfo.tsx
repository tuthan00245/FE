import './diss.scss'
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Col, Row } from 'antd';

import './diss.scss';
import { accountOptions } from '../../assets/data';
import { observer } from 'mobx-react';
import Profile from './Profile/Profile';
import Notification from './Notification/Notification';
import Order from './Order/Order';
import Address from './Address/Address';
import ChangePass from './ChangePass/ChangePass';

type Props = {};

const AccountInfor = (props: Props) => {
    const { pathname } = useLocation();
    const params = useParams();

    const active = accountOptions.findIndex((e) => e.path === pathname);

    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="page-header-container">
                        <div className="page-header__title">
                            <h1>Cá nhân</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <Row>
                        <Col span={6}>
                            <div className="page-content__menu">
                                <div className="page-content__menu-nav">
                                    <div className="page-content__menu-title">
                                        <h4>Menu</h4>
                                    </div>
                                    <ul className="page-content__menu-list">
                                        {accountOptions.map((item, i) => (
                                            <li key={i} className={`menu-list-item${i === active ? ' focus' : ''}`}>
                                                <Link to={item.path}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col span={18}>
                            {params.pathname === 'profile' && <Profile />}
                            {params.pathname === 'notifications' && <Notification />}
                            {params.pathname === 'orders' && <Order />}
                            {params.pathname === 'addresses' && <Address />}
                            {params.pathname === 'password' && <ChangePass />}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default observer(AccountInfor);
