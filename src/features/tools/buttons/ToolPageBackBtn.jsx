import { Link, useNavigate } from "react-router-dom";

export const ToolPageBackBtn = (e) => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div>
      <Link className="link" onClick={handleGoBack}>
        Назад
      </Link>
    </div>
  );
};
