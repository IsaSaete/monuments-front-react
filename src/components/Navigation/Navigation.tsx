import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <a className="navigation-link" href="/">
            Monuments
          </a>
        </li>
        <li>
          <a className="navigation-link" href="/add-monuments">
            Add monument
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
