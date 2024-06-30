import React from 'react';

function ContactUs() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card p-4 shadow-sm">
                        <h1 className="text-center mb-4">Contact Us</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" required className="form-control" id="name" aria-describedby="nameHelp"/>
                                <div id="nameHelp" className="form-text">Enter your name.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" required className="form-control" id="email" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows={4} required></textarea>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" required className="form-check-input" id="consent"/>
                                <label className="form-check-label" htmlFor="consent">Check me out</label>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
