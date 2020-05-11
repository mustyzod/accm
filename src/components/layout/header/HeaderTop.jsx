import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="fb-container">
                <div className="fb-row">
                    <div className="fb-col-3">
                        <div className="top-left">
                            <span> <FontAwesomeIcon icon="phone" /> (+61) 38376 6284</span>
                            <span> <FontAwesomeIcon icon="envelope" /> support@courseware.com</span>
                        </div>
                    </div>
                    <div className="fb-col-3">
                    <div className="top-right">
                        <div className="float-right">
                            <span> myCourseware</span>
                            <span> cart <FontAwesomeIcon icon="shopping-cart" /> </span>
                            <span> Search <FontAwesomeIcon icon="search" /></span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
