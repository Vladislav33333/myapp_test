import { Link } from "react-router-dom";
import { ToolPageBackBtn } from "../../../../features/tools/buttons/ToolPageBackBtn";

const UpceraSizeMenu = ({ type }) => {
  return (
    <div>
      <ToolPageBackBtn />
      <Link className="link" to={`/zr-tools/upcera/${type}/14`}>
        14 мм
      </Link>
      <Link className="link" to={`/zr-tools/upcera/${type}/16`}>
        16 мм
      </Link>
      <Link className="link" to={`/zr-tools/upcera/${type}/18`}>
        18 мм
      </Link>
      <Link className="link" to={`/zr-tools/upcera/${type}/20`}>
        20 мм
      </Link>
      <Link className="link" to={`/zr-tools/upcera/${type}/22`}>
        22 мм
      </Link>
    </div>
  );
};

export default UpceraSizeMenu;