import Monument from "../../types";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({
  monument: { imageUrl, imageAlt, name, description, city, country },
}) => {
  return (
    <article className="monument-card">
      <img className="monument-card__image" src={imageUrl} alt={imageAlt} />
      <h2 className="monument-card__name">{name}</h2>
      <p className="monument-card__description">{description}</p>
      <div className="monument-card__location">
        <span>{city}</span>
        <span>{country}</span>
      </div>
    </article>
  );
};

export default MonumentCard;
