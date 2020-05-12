import React from 'react';
import NavMenu from './NavMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderBottom = () => {
    return (
        <div className="fb-row header-bottom">
            <div className="fb-col-3">
                <div className="fb-container">
                        <img src="" alt="business_logo_wasn't_shared"/>
                        <span className="nav-toggle">
                            <FontAwesomeIcon className="hamburger-menu-icon" icon="bars"/>
                            <NavMenu />
                        </span>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom
