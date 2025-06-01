import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="link" to="/">
          Главная
        </Link>
      </nav>
    </header>
  );
};
export default Header;
