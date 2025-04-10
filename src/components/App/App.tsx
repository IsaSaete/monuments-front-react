import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
