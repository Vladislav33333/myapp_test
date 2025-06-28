import { Link } from "react-router-dom";
import { ToolPageBackBtn } from "../../../../features/tools/buttons/ToolPageBackBtn";

const AiditeSizeMenu = ({ type }) => {
  return (
    <div>
      <ToolPageBackBtn />
      <Link className="link" to={`/zr-tools/aidite/${type}/14`}>
        14 мм
      </Link>
      <Link className="link" to={`/zr-tools/aidite/${type}/16`}>
        16 мм
      </Link>
      <Link className="link" to={`/zr-tools/aidite/${type}/18`}>
        18 мм
      </Link>
      <Link className="link" to={`/zr-tools/aidite/${type}/20`}>
        20 мм
      </Link>
      <Link className="link" to={`/zr-tools/aidite/${type}/22`}>
        22 мм
      </Link>
    </div>
  );
};

export default AiditeSizeMenu;