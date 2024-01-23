import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./NavBar.css";
import logo from "../images/logo_nav.png"; // Adjust the path as necessary
import logo_profile from "../images/user_nav.png"; // Adjust the path as necessary
import logo_wishlist from "../images/love.png"; // Adjust the path as necessary
import logo_bag from "../images/bag_icon_nav.png"; // Adjust the path as necessary
import icon_search from "../images/search_nav.png";

function NavBar() {
  const navbarRef = useRef(null);

  useEffect(() => {
       // Animate the navbar into view
       gsap.to(navbarRef.current, {
        duration: 1,
        y: 0, // Animate to y: 0
        opacity: 1, // Animate to full opacity
        ease: 'power3.out'
      });
    }, []);

  return (
    <nav ref={navbarRef} className="navbar" style={{ transform: 'translateY(-100px)', opacity: 0 }}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links">
          <a href="/men" className="nav-link-men">Mens</a>
          <a href="/women" className="nav-link-women">
            Womens
          </a>
          <a href="/kids" className="nav-link-kids">
            Kids
          </a>
          <a href="/home&living" className="nav-link-home-living">
            Hom<span style={{ letterSpacing: "3px" }}>e</span>
            <span style={{ letterSpacing: "3px" }}>&</span>Living
          </a>
          <a href="/beauty" className="nav-link-beauty">
            Beauty
          </a>
        </div>

        <div className="navbar-search">
          <img src={icon_search} alt="search" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="navbar-icons-group">
          <div className="icon-item">
            <img src={logo_profile} alt="Profile" />
            <span>Profile</span>
          </div>
          <div className="icon-item">
            <img src={logo_wishlist} alt="Wishlist" />
            <span>Wishlist</span>
          </div>
          <div className="icon-item">
            <img src={logo_bag} alt="Bag" />
            <span>Bag</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
