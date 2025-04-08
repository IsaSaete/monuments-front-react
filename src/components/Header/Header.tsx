import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="title">
        <span className="title__main">Monuments</span>
        <span className="title__secondary"> of the world</span>
      </h1>
    </header>
  );
};

export default Header;
