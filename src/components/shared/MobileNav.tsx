import "@styles/mobile-nav.scss";
import { useMemo, useState } from "react";
import { sectionIds } from "src/App";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const links = useMemo(
    () => [
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
    ],
    []
  );
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
        {links.map((link, i) => (
          <li
            key={link.name + i}
            className="anim-fade-in-right"
            style={{ "--_sequence": i + 1 } as React.CSSProperties}
          >
            <a href={`#${link.id}`} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
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
