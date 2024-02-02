import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import spinner from "./../assets/Spinner.gif"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh] ">
        <img src={spinner} alt="" />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};
export default PrivateRoute;