import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const PrivateRoute = ({ children }) => {
   const { user,loading } = useContext(AuthContext)
  const { pathname } = useLocation()
  if (loading) {
   return <Loading></Loading>
  }
  if (user && user?.email) {
    return children
  }
  return <Navigate state={pathname} to={"/signIn"}></Navigate>
};

export default PrivateRoute;