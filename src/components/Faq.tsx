import sectionImage from "@assets/Illustrations/Illustration_5.svg";
import "@styles/faq.scss";
import Details from "./shared/Details";

interface QuestionAnswer {
  question: string;
  answer: string;
}

const qa: QuestionAnswer[] = [
  {
    question: "How much does a Teams subscription cost?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    question: "What are the differences between Contributors and Viewers?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    question: "Do I still need to purchase licenses for the Mac app?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    question: "How long does the free Teams subscription trial last?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    question: "Will program for Teams replace volume licensing?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
];

const Faq = () => {
  return (
    <section id="home-faq" className="home__faq container col-2-flex">
      <article className="home__faq-content">
        <span className="meta">FAQs</span>
        <h2 className="title">Common Questions.</h2>
        <p>
          The online form also provides links to a set of frequently asked
          questions, other information materials related to the financial
          disclosure programme.
        </p>
        <section className="home__faq-questions">
          {qa.map((item) => (
            <Details title={item.question} content={item.answer} />
          ))}
        </section>
      </article>
      <div className="home__faq-image section-image image-displacement-end-3">
        <img src={sectionImage} alt="illustration" />
      </div>
    </section>
  );
};
export default Faq;
