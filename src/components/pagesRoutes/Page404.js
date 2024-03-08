import ErrorMessage from "../errorMessage/Error";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <Link to="/" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default Page404;
