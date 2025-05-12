import { Outlet, Link } from "react-router-dom";

const ZrTools = () => {
  return (
    <div>
      <nav className="nav">
        <Link className="link" to="aiditeHT">
          Aidite
        </Link>{" "}
        <Link className="link" to="upceraFunc">
          Upcera
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default ZrTools;
