import React from 'react'

const TopCourse = () => {
    return (
        <section id="top-course">
            <div className="fb-container">
            <div className="grid-wrapper">
                <h2>TOP COURSES</h2>
                <p>Donec rutrum congue leo eget malesuada</p>
                <div className="grid">
                    <div className="grid-item"><h3>BECOME A WORDPRESS EXPRESS</h3></div>
                    <div className="grid-item"><h3>COMPLETE PYTHON MASTERCLASS</h3></div>
                    <div className="grid-item"><h3>BEGINNER TO PRO IN EXCEL</h3></div>
                    <div className="grid-item"><h3>THE ULTIMATE COURSE TO BECOME A JAVASCRIPT NINJA</h3></div>
                </div>
            </div>
            </div>
            <span className="btn">BROWSE ALL</span>
        </section>
    )
}

export default TopCourse
