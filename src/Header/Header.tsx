import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="title">
        <span className="app__title">Monuments</span>
        <span className="app__subtitle"> of the world</span>
      </h1>
    </div>
  );
};

export default Header;
