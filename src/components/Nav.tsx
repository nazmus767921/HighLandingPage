import logo from "@assets/Logotype/LogoBlack.png";
import "@styles/nav.scss";
import { sectionIds } from "src/App";
import MobileNav from "./shared/MobileNav";

const Nav = () => {
  const links = [
    {
      name: "About Us",
      id: sectionIds.aboutUs,
    },
    {
      name: "How It Works",
      id: sectionIds.howItWorks,
    },
    {
      name: "Pricing",
      id: sectionIds.pricing,
    },
    {
      name: "FAQs",
      id: sectionIds.faq,
    },
  ];

  return (
    <nav id="nav" className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt="brand logo" />
      </div>
      {/* Menu */}
      <ul className="navbar__menu">
        {links.map((link, i) => (
          <li
            key={link.name + i}
            className="anim-fade-in-right"
            style={{ "--_sequence": i + 1 } as React.CSSProperties}
          >
            <a href={`#${link.id}`}>{link.name}</a>
          </li>
        ))}
      </ul>
      {/* Buttons */}
      <ul className="navbar__buttons">
        <li
          className="anim-fade-in-left"
          style={{ "--_sequence": 1 } as React.CSSProperties}
        >
          <button type="button" className="btn">
            Login
          </button>
        </li>
        <li
          className="anim-fade-in-left"
          style={{ "--_sequence": 0 } as React.CSSProperties}
        >
          <button type="button" className="btn btn--primary">
            Sign Up
          </button>
        </li>
      </ul>
      {/* Mobile */}
      <div className="navbar__mobile-menu">
        <MobileNav />
      </div>
    </nav>
  );
};
export default Nav;
