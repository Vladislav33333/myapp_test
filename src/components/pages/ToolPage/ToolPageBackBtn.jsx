import { Link } from "react-router-dom";
// import toolsData from "../../../services/toolsData"

export const ToolPageBackBtn = (props) => {
  return (
    <Link
      className="link"
      to={
        props.toolType !== "mill" && props.toolType !== "aiditeHT"
          ? "/zr-tools"
          : "/"
      }
    >
      {/* сделать адекватную логику кнопки назад*/}
      Назад
    </Link>
  );
};
