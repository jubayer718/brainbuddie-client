import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
     {
        path: '/',
        element:<Home></Home>
        
      },
      
      {
        path: '/signUp',
        element:<SignUp></SignUp>
      }
      ,
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      }
    ]
  }
])
export default routes;