import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import { ReactComponent as LuxeLogo } from '../../assets/Luxe-Logo.svg';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <LuxeLogo className='logo'></LuxeLogo>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
        </div>
    </div>
)

export default Header;