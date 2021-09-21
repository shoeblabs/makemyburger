import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className="row page-header">
            <h3>MAKE MY BURGER </h3>
            <div className="menu">
                <NavLink exact to="/" activeClassName="selected" className="menu__item">Billing</NavLink>
                <NavLink to="/order-list" activeClassName="selected" className="menu__item">Orders</NavLink>
            </div>
        </div>
    );
}

export default Header;
