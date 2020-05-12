import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = () => {
    return (
        <div className="nav-menu">
        <ul>
            <li>
                Demos <FontAwesomeIcon icon="chevron-down"/>
                <div className="dropdown">
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                </div>
            </li>
            <li>
                Courses <FontAwesomeIcon icon="chevron-down"/>
                <div className="dropdown">
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                </div>
            </li>
            <li>
                Instructors <FontAwesomeIcon icon="chevron-down"/>
                <div className="dropdown">
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                </div>
            </li>
            <li>
                Blogs <FontAwesomeIcon icon="chevron-down"/>
                <div className="dropdown">
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                </div>
            </li>
            <li>
                Pages <FontAwesomeIcon icon="chevron-down"/>
                <div className="dropdown">
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                    <div><a href="/">Demo 1</a></div>
                </div>
            </li>
        </ul>
    </div>
    )
}

export default NavMenu
