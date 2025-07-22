import { Link } from "react-router-dom";
import { ToolPageBackBtn } from "../../features/tools/buttons/ToolPageBackBtn";

const ZrTools = () => {
  return (
    <div>
      <ToolPageBackBtn />
      <Link className="link" to="/zr-tools/aidite">
        Aidite
      </Link>
      <Link className="link" to="/zr-tools/upcera">
        Upcera
      </Link>
    </div>
  );
};

export default ZrTools;