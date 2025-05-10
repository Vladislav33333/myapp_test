import { Link } from "react-router-dom";

export const ZrTools = () => {
  return (
    <div className="nav">
      <Link className="link" to="/test">
        Aidite
      </Link>
      <Link className="link" to="/test2">
        Upcera
      </Link>
    </div>
  );
};
