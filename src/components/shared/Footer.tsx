import logo from "@assets/Logotype/LogoWhite.png";
import "@styles/footer.scss";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <section className="footer__content">
          <div className="footer__logo">
            <img src={logo} alt="logo" />
          </div>
          <h3 className="footer__title">
            Want to receive our awesome stories?
          </h3>
          <div className="footer-email">
            <input
              type="text"
              name="email"
              id="home-hero-email"
              className="inputBox"
              placeholder="Enter your email"
            />
            <button type="button" className="btn btn--primary">
              Get Started
            </button>
          </div>
          <span className="footer__copyright">
            <Copyright />
          </span>
        </section>
        {/* Links */}
        <section className="footer__links">
          <dl className="email">
            <dt>Email</dt>
            <dd>
              Designer:{" "}
              <a className="underlined" href="mailto:info@the18.design">
                info@the18.design
              </a>
            </dd>
            <dd>
              Developer:{" "}
              <a className="underlined" href="mailto:nazmus.dev.0@gmail.com">
                nazmus.dev.0@gmail.com
              </a>
            </dd>
          </dl>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Lead generation</a>
            </li>
            <li>
              <a href="#">Customer engagement</a>
            </li>
            <li>
              <a href="#">Customer support</a>
            </li>
            <li>
              <a href="#">Help Center Articles</a>
            </li>
            <li>
              <a href="#">Outbound Messages</a>
            </li>
          </ul>
          <ul className="socials">
            <li className="social-icon">
              <a title="facebook" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icon">
              <a title="twitter" href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="social-icon">
              <a title="google plus" href="#">
                <FaGooglePlusG />
              </a>
            </li>
            <li className="social-icon">
              <a title="linkedin" href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icon">
              <a title="youtube" href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </section>
        <span className="footer__copyright-mobile">
          <Copyright />
        </span>
      </div>
    </footer>
  );
};

const Copyright = () => {
  return (
    <p className="copyright">
      © Designed by The 18 Design. All rights reserved. <br /> And website demo developed by{" "}
      <a
        className="underlined"
        href="https://nazmus.vercel.app"
        target="_blank"
        rel="noopener"
      >
        Nazmus.dev
      </a>
    </p>
  );
};
export default Footer;
