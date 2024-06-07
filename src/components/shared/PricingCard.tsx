import "@styles/pricing-card.scss";

interface Props {
  price: number;
  description: string;
  list: string[];
  variant?: "best-choice" | "second-best";
}

const PricingCard = ({
  variant,
  price = 49,
  description = "lorem ipsum dolor de amet",
  list,
}: Props) => {
  return (
    <article className={`pricing-card ${variant ?? ""}`}>
      <section>
        <dl>
          <dt className="pricing-card__badge" data-price-per="month">
            {price}
          </dt>
          <dd className="pricing-card__price">{description}</dd>
        </dl>
        <ul className="pricing-card__list">
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
      <button type="button" className="btn btn--primary">
        Join
      </button>
    </article>
  );
};
export default PricingCard;
