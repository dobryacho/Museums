import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks'; // Ваш хук для доступа к состоянию

const PrivateRoute = ({ children }) => {
  const user = useAppSelector((state) => state.userSlice.user);

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
