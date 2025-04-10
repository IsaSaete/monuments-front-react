import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="main-navigation__list">
        <li>
          <NavLink className="main-navigation__link" to="/monuments">
            Monuments
          </NavLink>
        </li>
        <li>
          <NavLink className="main-navigation__link" to="/add-monument">
            Add monument
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
