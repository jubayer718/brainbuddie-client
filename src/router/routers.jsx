import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import CreateAssignment from "../pages/create-assignment/CreateAssignment";
import MyAssignment from "../pages/My-assignment/MyAssignment";
import PendingAssignment from "../pages/PendingAssignment/PendingAssignment";
import PrivateRoute from "./Private/PrivateRoute";
import AllAssignments from "../pages/allAssignments/AllAssignments";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
     {
        path: '/',
        element:<Home></Home>
        
      }, {
        path: 'all-assignment',
        element:<AllAssignments></AllAssignments>

      }, {
        path: 'pendingAssignment',
        element:<PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>
      },
      {
        path: '/create-assignment',
        element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      }, {
        path: '/my-assignment',
        element:<PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
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