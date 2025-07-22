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
        {/* <Link className="link" to="/premill-tools">
          Премиллы
        </Link>
        <Link className="link" to="/ti-tools">
          Платформы
        </Link>
        <Link className="link" to="/analog-tools">
          Аналоги
        </Link> */}
        <Link className="link logoutBtn" onClick={logout} type="button">
          Выйти
        </Link>
      </nav>
    </>
  );
};
