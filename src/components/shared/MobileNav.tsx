import "@styles/mobile-nav.scss";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  return (
    <nav id="mobile-nav" className="mobile-nav">
      <button
        type="button"
        title="Menu"
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      ></button>
      <ul
        className={`mobile-nav__menu container ${isOpen ? "open" : "closed"}`}
      >
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">How It Works</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <ul className="mobile-nav__buttons">
          <li>
            <button type="button" className="btn">
              Login
            </button>
          </li>
          <li>
            <button type="button" className="btn btn--primary">
              Sign Up
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
export default MobileNav;
