import { Navigate, Route, Routes } from "react-router";
import App from "./components/App/App";
import MonumentPage from "./monument/pages/MonumentPage/MonumentPage";
import AddMonument from "./monument/pages/AddMonument/AddMonument";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/monuments"} />} />
        <Route path="monuments" element={<MonumentPage />} />
        <Route path="add-monument" element={<AddMonument />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
