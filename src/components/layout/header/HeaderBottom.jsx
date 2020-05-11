import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderBottom = () => {
    return (
        <div className="fb-row header-bottom">
            <div className="fb-col-3">
                <div className="fb-container">
                    <div className="">
                        {/* <img src="" alt="business logo"/> */}
                        <div className="top-menu float-right">
                            <ul>
                                <li>
                                    <a href="/">
                                        Demos <FontAwesomeIcon icon="chevron-down"/>
                                    </a>
                                    <div className="dropdown">
                                        <ul>
                                            <li>
                                                <a href="/">Demo 1</a>
                                            </li>
                                            <li>
                                                <a href="/">Demo 1</a>
                                            </li>
                                            <li>
                                                <a href="/">Demo 1</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom
