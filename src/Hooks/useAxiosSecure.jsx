import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useAuth from "./useAuth";



 export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials:true,
 })

const useAxiosSecure = () => {
  // const { handleLogOut } =useAuth()
  // const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(response => {
      // console.log('response in interceptor',response);
      return response;
     }, error => {
      // console.log('error caught in interceptor', error);
      if (error.response.status === 401 || error.response.status === 403) {
        toast.error(error.response.data)
        // console.log('need to logout user');
        // logout user
        // handleLogOut()
        //   .then(() => {
        //   console.log('logout user');
        //   }).catch(err => {
        //   console.log('error in interceptor',err);
        // })
        // redirect to login page
        // navigate('/signIn')
      }
  })
},[])


  return axiosSecure;
}
export default useAxiosSecure
 


// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { toast } from "react-toastify";
// import { AuthContext } from "../provider/AuthProvider";
// import { useNavigate } from "react-router-dom";

// export const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//   const { handleLogOut } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!handleLogOut) {
//       console.error("handleLogOut is not defined in AuthContext!");
//       return;
//     }

//     axiosSecure.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response?.status === 401 || error.response?.status === 403) {
//           toast.error(error.response.data || "Unauthorized access");
//           handleLogOut();
//           navigate("/signIn");
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [handleLogOut, navigate]);

//   return axiosSecure;
// };

// export default useAxiosSecure;
