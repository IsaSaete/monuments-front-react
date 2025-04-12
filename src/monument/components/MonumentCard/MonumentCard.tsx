import Monument from "../../types";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument }) => {
  return (
    <article className="monument-card">
      <img
        className="monument-card__image"
        src={monument.imageUrl}
        alt={monument.imageAlt}
      />
      <h2 className="monument-card__name">{monument.name}</h2>
      <p className="monument-card__description">{monument.description}</p>
      <div className="monument-card__location">
        <span>{monument.city}</span>
        <span>{monument.country}</span>
      </div>
    </article>
  );
};

export default MonumentCard;
