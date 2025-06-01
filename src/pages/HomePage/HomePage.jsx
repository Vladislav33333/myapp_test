import { Link } from "react-router-dom";
import "../../components/Header/Header.css";

export const HomePage = () => {
  return (
    <nav className="nav">
      <Link className="link" to="/mill-tools">
        Фрезы
      </Link>
      <Link className="link" to="/zr-tools">
        Цирконий
      </Link>
    </nav>
  );
};
