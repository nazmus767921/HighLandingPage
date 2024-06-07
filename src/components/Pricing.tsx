import sectionImage from "@assets/Illustrations/Illustration_4.svg";
import "@styles/pricing.scss";
import PricingCard from "./shared/PricingCard";

const Pricing = () => {
  return (
    <section id="home-pricing" className="home__pricing container">
      <header className="col-2-flex-reverse">
        <article className="home__pricing-content">
          <span className="meta">Pricing</span>
          <h2 className="title">
            Select a membership level the right price for you
          </h2>
          <div className="description">
            <p>
              Prices listed in USD. Taxes may apply. By using program you agree
              to our terms and policies
            </p>
          </div>
        </article>
        <div className="home__pricing-image">
          <img src={sectionImage} alt="illustration" />
        </div>
      </header>
      <section className="home__pricing-prices">
        <PricingCard
          price={49}
          description="A pay-once license, just for yous"
          list={[
            "The Mac app — yours to keep",
            "Beautiful White_level",
            "One year of saving to Cloud",
          ]}
        />
        <PricingCard
          price={99}
          description="Pro account, just for you"
          list={[
            "The Mac app — yours to keep",
            "One year of Mac app updates",
            "One year of saving to Cloud",
            "A personal Cloud workspace",
            "All tools, just for you",
          ]}
          variant="best-choice"
        />
        <PricingCard
          price={299}
          description="A subscription for the whole team"
          list={[
            "Access to the Mac app for all",
            "A shared Cloud workspace",
            "Free Cloud access for unlim",
            "Easy team management",
            "No license key required",
          ]}
          variant="second-best"
        />
      </section>
    </section>
  );
};
export default Pricing;
