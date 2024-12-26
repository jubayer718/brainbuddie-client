import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
// import { AuthContext } from "../provider/AuthProvider";

 const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials:true,
 })

const useAxiosSecure = () => {
  // const { handleLogOut } =useAuth()
  // const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(response => {
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
        //   console.log('error in interceptor',error);
        // })
        // redirect to login page
        // navigate('/signIn')
      }
  })
},[])


  return axiosSecure;
}
 export default useAxiosSecure