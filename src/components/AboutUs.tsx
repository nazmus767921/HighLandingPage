import sectionImage from "@assets/Illustrations/Illustration_2.svg";
import "@styles/about-us.scss";
import { sectionIds } from "src/App";

const AboutUs = () => {
  return (
    <section id={sectionIds.aboutUs} className="home__about container col-2-flex-reverse">
      <article className="home__about-content">
        <span className="meta">About Us</span>
        <h2 className="title">
          Faster, friendlier feedback loops make life easier.
        </h2>
        <p>
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It&apos;s up to you.
          Stakeholders can check out designs in their web browser, test
          prototypes and leave feedback for free.
        </p>
        <ul className="home__about-list">
          <li>Shared Cloud Libraries, for a single source of truth</li>
          <li>Prototype previews for user testing and research</li>
          <li>Easy organization with projects</li>
          <li>Free developer handoff, right inside the browser</li>
          <li>Two-factor authentication and SSO</li>
        </ul>
      </article>
      <div className="home__about-image section-image image-displacement-start-2">
        <img src={sectionImage} alt="illustration" />
      </div>
    </section>
  );
};
export default AboutUs;
