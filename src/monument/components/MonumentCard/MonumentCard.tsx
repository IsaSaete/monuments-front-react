import Monument from "../../types";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument }) => {
  return (
    <article className="monument-card">
      <h2 className="monument-name">{monument.name}</h2>
    </article>
  );
};

export default MonumentCard;
