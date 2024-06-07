import "@styles/details.scss";

interface Props {
  title: string;
  content: string;
}

const Details = ({ title, content }: Props) => {
  return (
    <details className="details">
      <summary>{title}</summary>
      <p className="details__content">{content}</p>
    </details>
  );
};
export default Details;
