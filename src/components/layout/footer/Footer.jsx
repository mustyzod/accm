import React from 'react';
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-wrapper">
                <FooterTop/>
                <FooterBottom/>
            </div>
        </section>
    )
}

export default Footer
