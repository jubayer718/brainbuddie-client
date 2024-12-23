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
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import { axiosSecure } from "../Hooks/useAxiosSecure";


const routes =  createBrowserRouter ([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
     {
        path: '/',
        element:<Home></Home>
        
      }, {
        path: '/all-assignment',
        element:<AllAssignments></AllAssignments>

      }, {
        path: '/pendingAssignment',
        element:<PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>
      }, 
      
      {
          path: '/updateAssignment/:id',
        element: <PrivateRoute><UpdateAssignment /></PrivateRoute>,  

    loader: async ({ params }) => {
        try {
            const response = await axiosSecure.get(`/updateAssignment/${params.id}`);
            return response.data; // Return the assignment data from the API
        } catch (error) {
            console.error('Error fetching assignment:', error);
            // Handle error appropriately (e.g., redirect or show an error message)
            throw new Response("Failed to load assignment data", { status: 500 });
        }
    }
      }
      , {
        path: '/create-assignment',
        element:<CreateAssignment></CreateAssignment>
      }
      
      , {
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