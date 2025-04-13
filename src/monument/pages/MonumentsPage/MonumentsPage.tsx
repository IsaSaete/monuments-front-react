import { useEffect } from "react";
import MonumentList from "../../components/MonumentList/Monumentlist";
import useMonuments from "../../hooks/useMonuments";
import "../../components/MonumentList/MonumentList.css";

const MonumentsPage: React.FC = () => {
  const { monuments, loadMonuments } = useMonuments();

  useEffect(() => {
    loadMonuments();
  }, [loadMonuments]);

  return <MonumentList monuments={monuments} />;
};

export default MonumentsPage;
