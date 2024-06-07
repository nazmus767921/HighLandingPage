import logo from "@assets/Logotype/LogoBlack.png";
import "@styles/nav.scss";

const Nav = () => {
  return (
    <nav id="nav" className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt="brand logo" />
      </div>
      <ul className="navbar__menu">
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
      </ul>
      <ul className="navbar__buttons">
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
    </nav>
  );
};
export default Nav;
