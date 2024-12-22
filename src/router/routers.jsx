import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import CreateAssignment from "../pages/create-assignment/CreateAssignment";
import MyAssignment from "../pages/My-assignment/MyAssignment";
import PendingAssignment from "../pages/PendingAssignment/PendingAssignment";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
     {
        path: '/',
        element:<Home></Home>
        
      }, {
        path: 'pendingAssignment',
        element:<PendingAssignment></PendingAssignment>
      },
      {
        path: '/create-assignment',
        element:<CreateAssignment></CreateAssignment>
      }, {
        path: '/my-assignment',
        element:<MyAssignment></MyAssignment>
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