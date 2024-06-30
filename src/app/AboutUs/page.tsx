import React from 'react'

function AboutUs() {
    return ( <>
    <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col d-flex flex-column justify-content-center">
                    <h1>About Us</h1>
                    <p className="fw-normal">At E-commerce , you 'll find a thoughtfully curated collection of 500+ brands from over 30 countries around the world .</p>
                    <p className="fw-normal">We 've made it our mission to drive the discovery of unique, functional, fashionable, and purposeful products for every aspect of your life-work, play,home and everything in between.</p>
                    <p className="fw-semibold">If you reject the status quo and appreciate thoughtful design, we believe we have what you're looking for and hope you enjoy the discovery process as much as we. </p>
                    <img src="/aboutus.jpg" alt="E-commerce Surprise" className="img-fluid custom-img" />
                </div>
            </div>    
        </div>
    </> );
}

export default AboutUs;