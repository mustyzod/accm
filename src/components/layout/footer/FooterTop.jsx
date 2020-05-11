import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterTop = () => {
    return (
          <div id="footer_top">
              <div className="footer-top-wrapper">
            <div className="fb-container">
              <div className="fb-row">
                <div className="fb-col-3">
                  <img className="footer_logo" src="" alt="business_logo" />
                  <p>We are a team of different geeks that believe in producing top-quality courses and category based on best videos.</p>
                  <ul className="business_about">
                    <li>
                      <FontAwesomeIcon icon="phone-square-alt" /> 088 12345 67890
                      </li>
                    <li>
                      <FontAwesomeIcon icon="envelope-square" /> info@courseware.com
                      </li>
                  </ul>
                  <div className="social_wrapper">
                    <span className='social_icon'>
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </span>
                    <span className='social_icon'>
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </span>
                    <span className='social_icon'>
                      <FontAwesomeIcon icon={['fab', 'google-plus-square']} />
                    </span>
                    <span className='social_icon'>
                      <FontAwesomeIcon icon={['fab', 'youtube-square']} />
                    </span>
                  </div>
                
                </div>
                <div className="fb-col-3">
                  <p className="widget_title">QUICK LINKS</p>
                  <ul className="widget_body">
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Courses
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Courses
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> About Us
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Gallery
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Become a Teacher
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Contact
                        </li>
                  </ul>
                </div>
                <div className="fb-col-3">
                  <p className="widget_title">NEWS</p>
                  <div id="media_wrapper">
                    <div className="media_s">
                      <div className="left">
                        <img src="https://i.ibb.co/hC1mF7s/1.jpg" alt="Post" />
                      </div>
                      <div className="media_body">
                        <span>Guide to Wordpress Custom Post type</span>
                        <span className="media_comment">
                          <FontAwesomeIcon icon="comment" /> 23 Comments
                        </span>
                      </div>
                    </div>
                    <div className="media_s">
                      <div className="left">
                        <img src="https://i.ibb.co/hC1mF7s/2.jpg" alt="Post" />
                      </div>
                      <div className="media_body">
                        <span>Guide to Wordpress Custom Post type</span>
                        <span className="media_comment">
                          <FontAwesomeIcon icon="comment" /> 23 Comments
                        </span>
                      </div>
                    </div>
                    <div className="media_s">
                      <div className="left">
                        <img src="https://i.ibb.co/hC1mF7s/3.jpg" alt="Post" />
                      </div>
                      <div className="media_body">
                        <span>Guide to Wordpress Custom Post type</span>
                        <span className="media_comment">
                          <FontAwesomeIcon icon="comment" /> 23 Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fb-col-3">
                  <p className="widget_title">SUPPORT</p>
                  <ul className="widget_body">
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> FAQ
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Documentation
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Forums
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Career
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Community
                        </li>
                    <li>
                      <FontAwesomeIcon icon="angle-double-right" /> Management
                        </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>                   
            </div>
    )
}

export default FooterTop
