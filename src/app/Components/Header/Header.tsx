"use client";

import Link from 'next/link';
import { useCart } from "@/app/Services/CartContext";
import SearchBox from "@/app/Components/SearchBox/SearchBox";


function Header() {
  const { cartItems } = useCart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand pe-5 fw-bold" href="/">
            <img src="/logoimg-3.png" alt="Logo" width={150} height={100} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <Link className="nav-link fw-bold" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href='/AboutUs'>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href='/ContactUs'>Contact Us</Link>
              </li>
            </ul>
            <SearchBox />
            <Link href="/Cart" className="btn btn-outline-dark position-relative">
              <img src="/cart-logo.png" alt="Cart Icon" width={40} height={40} />
              {cartItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                  <span className="visually-hidden">cart items</span>
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;