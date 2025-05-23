import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="link" to="/mill-tools">
          Фрезы
        </Link>
        <Link className="link" to="/zr-blocks">
          Цирконий
        </Link>
        <Link className="link" to="/zr-tools">
          Блоки
        </Link>
      </nav>
    </header>
  );
};
export default Header;
