// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

// // const localURL = "http://localhost:5173"
// // const deployURL = "https://car-doctor-server-sigma-ruby.vercel.app"

// const axiosSecure = axios.create({
//   baseURL: `https://car-doctor-server-sigma-ruby.vercel.app`,
//   withCredentials: true,
// });
// const useAxiosSecure = () => {
//   const { logOut } = useAuth();
//   const navigate = useNavigate();
//   useEffect(() => {
//     axiosSecure.interceptors.response.use(
//       (res) => {
//         return res;
//       },
//       (error) => {
//         console.log("Error tracked in the interceptors", error.response);
//         if (error.response.status === 401 || error.response.status === 403) {
//           console.log("Log out the user");
//           logOut()
//             .then(() => {
//               console.log("yaph, log outed");
//               navigate("/logIn");
//             })
//             .catch((err) => {
//               console.log("log out err is: ", err);
//             });
//         }
//       }
//     );
//   }, [logOut, navigate]);
//   return axiosSecure;
// };
// export default useAxiosSecure;


import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const deployURL = "https://car-doctor-server-sigma-ruby.vercel.app";
const localURL = "http://localhost:5001"

const axiosSecure = axios.create({
  // baseURL: localURL || deployURL ,
  // baseURL: "https://car-doctor-server-sigma-ruby.vercel.app",
  baseURL: "http://localhost:5001",
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
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};
export default useAxiosSecure;