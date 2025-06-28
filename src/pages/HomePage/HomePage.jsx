import { Link } from "react-router-dom";
import "../../components/Header/Header.css";
import { useAuth } from "../../components/Auth_test/AuthContext";
export const HomePage = () => {
  const { logout } = useAuth();
  return (
    <>
      <nav className="nav">
        <Link className="link" to="/mill-tools">
          Фрезы
        </Link>
        <Link className="link" to="/zr-tools">
          Цирконий
        </Link>
        <Link className="link logoutBtn" onClick={logout} type="button">
          Выйти
        </Link>
      </nav>
    </>
  );
};
