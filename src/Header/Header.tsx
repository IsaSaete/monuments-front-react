import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="title">
        <span className="title__main">Monuments</span>
        <span className="title__secondary"> of the world</span>
      </h1>
    </div>
  );
};

export default Header;
