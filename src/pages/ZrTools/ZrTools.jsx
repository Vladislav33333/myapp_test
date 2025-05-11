import { Link } from "react-router-dom";

const ZrTools = () => {
  return (
    <div className="nav">
      <Link className="link" to="/aiditeHT">
        Aidite
      </Link>
      <Link className="link" to="/upceraFunc">
        Upcera
      </Link>
    </div>
  );
};
export default ZrTools;
