import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-warning text-white">
        <div className="row pt-5">
          <div className="col-2">
            <ul style={{ listStyleType: 'none' }}>
              <h6>Get to Know Us</h6>
              <Link href="/ContactUs" className="footer-link">
                <li>Contact Us</li>
              </Link>
              <Link href="/AboutUs" className="footer-link">
                <li>About Us</li>
              </Link>
              <Link href="Careers" className="footer-link">
                <li>Careers</li>
              </Link>
              <Link href="/" className="footer-link">
                <li>Corporate Information</li>
              </Link>
            </ul>
          </div>
          <div className="col-2">
            <ul style={{ listStyleType: 'none' }}>
              <h6>Let Us Help You</h6>
              <Link href="/" className="footer-link">
                <li>Payments</li>
              </Link>
              <Link href="/" className="footer-link">
                <li>Shippings</li>
              </Link>
              <Link href="/" className="footer-link">
                <li>Cancellations & Returns</li>
              </Link>
              <Link href="ContactUs" className="footer-link">
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
          <div className="col-2">
            <ul style={{ listStyleType: 'none' }}>
              <h6>Consumer Policy</h6>
              <Link href="/" className="footer-link">
                <li>Cancellations & Returns</li>
              </Link>
              <Link href="Home" className="footer-link">
                <li>Terms of Use</li>
              </Link>
              <Link href="/" className="footer-link">
                <li>Security</li>
              </Link>
              <Link href="Home" className="footer-link">
                <li>Privacy</li>
              </Link>
            </ul>
          </div>
          <div className="col-2">
            <ul style={{ listStyleType: 'none' }}>
              <h6>Follow Us</h6>
              <a href="https://facebook.com" className="footer-link">
                <li>Facebook</li>
              </a>
              <a href="https://twitter.com" className="footer-link">
                <li>Twitter</li>
              </a>
              <a href="https://instagram.com" className="footer-link">
                <li>Instagram</li>
              </a>
            </ul>
          </div>
          <div className="col-2" style={{ borderLeft: '1px solid white' }}>
            <ul style={{ listStyleType: 'none' }}>
              <h6>Mail Us:</h6>
              <li className="address">
                E-commerce Private limited, White Street, <br /> Bangalore, India, 5600061
              </li>
            </ul>
          </div>
        </div>

        

        <div className="row pt-2 mt-3" style={{ borderTop: '1px solid white' }}>
          <div className="col d-flex justify-content-center">
            <p>© 2024 E-commerce. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
