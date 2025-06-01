import { Outlet, Link } from "react-router-dom";

const ZrTools = () => {
  return (
    <div>
      <Link className="link" to="aiditeHT">
        Aidite
      </Link>{" "}
      <Link className="link" to="upceraFunc">
        Upcera
      </Link>
      <Outlet />
    </div>
  );
};
export default ZrTools;
