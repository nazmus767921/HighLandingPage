import heroImage from "@assets/Illustrations/Illustration_1.svg";
import masterCard from "@assets/Logotype/m_mastercard.svg";
import paypal from "@assets/Logotype/m_paypal.svg";
import visa from "@assets/Logotype/m_visa.svg";
import "@styles/hero.scss";

const logos = [
  {
    id: 1,
    src: masterCard,
    alt: "mastercard logo",
  },
  {
    id: 2,
    src: paypal,
    alt: "paypal logo",
  },
  {
    id: 3,
    src: visa,
    alt: "visa logo",
  },
];

const Hero = () => {
  return (
    <section id="home-hero" className="home__hero container">
      <article className="home__hero-content">
        <section className="main-content">
          <h1 className="title">
            Always&nbsp;Track & Analyze Your Business Statistics To Succeed.
          </h1>
          <p>
            A better way to manage your sales, team, clients & marketing — on a
            single platform. Powerful, affordable & easy.
          </p>
          <div className="home__hero-email">
            <input
              type="text"
              name="email"
              id="home-hero-email"
              className="inputBox"
              placeholder="Enter your email"
            />
            <button className="btn btn--primary">Get Started</button>
          </div>
        </section>
        <ul className="home__hero-logos">
          {logos.map((logo) => (
            <li key={logo.id}>
              <img src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </article>
      <div className="home__hero-image">
        <img src={heroImage} alt="hero image" />
      </div>
    </section>
  );
};
export default Hero;
