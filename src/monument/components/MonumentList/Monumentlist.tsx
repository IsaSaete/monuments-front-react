import Monument from "../../types";
import MonumentCard from "../MonumentCard/MonumentCard";

interface MonumenListProps {
  monuments: Monument[];
}

const MonumentList: React.FC<MonumenListProps> = ({ monuments }) => {
  return (
    <ul className="monuments">
      {monuments.map((monument) => (
        <li key={monument.id}>
          <MonumentCard monument={monument} />
        </li>
      ))}
    </ul>
  );
};

export default MonumentList;
