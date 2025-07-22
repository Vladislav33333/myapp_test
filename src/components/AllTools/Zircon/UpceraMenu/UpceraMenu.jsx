import { Link } from "react-router-dom";
import { ToolPageBackBtn } from "../../../../features/tools/buttons/ToolPageBackBtn";

const UpceraMenu = () => {
  return (
    <div>
      <ToolPageBackBtn />
      <Link className="link" to="/zr-tools/upcera/func">
        Upcera Func
      </Link>
      <Link className="link" to="/zr-tools/upcera/test">
        Upcera test
      </Link>
    </div>
  );
};

export default UpceraMenu;