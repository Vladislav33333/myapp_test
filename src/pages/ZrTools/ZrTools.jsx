import { Link } from "react-router-dom";

const ZrTools = () => {
  return (
    <div>
      <Link className="link" to="/zr-tools/aidite">
        Aidite
      </Link>
      <Link className="link" to="/zr-tools/upceraFunc">
        Upcera
      </Link>
    </div>
  );
};

export default ZrTools;