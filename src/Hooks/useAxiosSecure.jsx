import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-sigma-ruby.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("Error tracked in the interceptors", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("Log out the user");
          logOut()
            .then(() => {
              console.log("yaph, log outed");
              navigate("/logIn");
            })
            .catch((err) => {
              console.log("log out err is: ", err);
            });
        }
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
