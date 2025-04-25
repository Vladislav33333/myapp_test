import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/tools">Фрезы</Link>
        <Link to="/about">Цирконий</Link>
        <Link to="/contacts">PMMA</Link>
      </nav>
    </header>
  );
};
export default Header;
