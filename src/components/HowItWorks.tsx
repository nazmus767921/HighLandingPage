import sectionImage from "@assets/Illustrations/Illustration_3.svg";
import icon1 from "@assets/UIElements/icon_1.svg";
import icon2 from "@assets/UIElements/icon_2.svg";
import icon3 from "@assets/UIElements/icon_3.svg";
import icon4 from "@assets/UIElements/icon_4.svg";
import "@styles/how-it-works.scss";

interface ListItem {
  id: number;
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
  };
}

const list: ListItem[] = [
  {
    id: 1,
    title: "Shared Cloud Libraries",
    description:
      "In the cloud, all you need is a single source of truth. Add a Viewer to your team so they can see everything you share, or invite people to individual documents. It's up to you.",
    icon: {
      src: icon1,
      alt: "Illustration",
    },
  },
  {
    id: 2,
    title: "Free developer handoff, right inside",
    description:
      "Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.",
    icon: {
      src: icon2,
      alt: "Illustration",
    },
  },
  {
    id: 3,
    title: "Real-time collaborative editing",
    description:
      "Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.",
    icon: {
      src: icon3,
      alt: "Illustration",
    },
  },
  {
    id: 4,
    title: "Integrations with the Cloud API",
    description:
      "Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. ",
    icon: {
      src: icon4,
      alt: "Illustration",
    },
  },
];

const HowItWorks = () => {
  return (
    <section
      id="home-how-it-works"
      className="home__how-it-works container col-2-flex"
    >
      <article className="home__how-it-works-content">
        <span className="meta">How It Works</span>
        <h2 className="title">Building the best space for collaboration.</h2>
        <p>
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It&apos;s up to you.
          Stakeholders can check out designs in their web browser, test
          prototypes and leave feedback for free.
        </p>
        <ul className="home__how-it-works-list">
          {list.map((item) => (
            <li className="list-item" key={item.id}>
              <div className="list-item__icon">
                <img src={item.icon.src} alt={item.icon.alt} />
              </div>
              <section className="list-item__content">
                <h3 className="list-item__title">{item.title}</h3>
                <p>{item.description}</p>
              </section>
            </li>
          ))}
        </ul>
      </article>
      <div className="home__how-it-works-image section-image image-displacement-end-3">
        <img src={sectionImage} alt="illustration" />
      </div>
    </section>
  );
};
export default HowItWorks;
