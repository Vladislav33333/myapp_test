import { Link } from "react-router-dom";

const AiditeMenu = () => {
  return (
    <div>
      <Link className="link" to="/zr-tools/aidite/ht">
        Aidite HT
      </Link>
      <Link className="link" to="/zr-tools/aidite/st">
        Aidite ST
      </Link>
    </div>
  );
};

export default AiditeMenu;