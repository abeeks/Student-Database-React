import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Protected = ({ children }) => {
  const { user } = UserAuth();
  // Check if user is not authenticated, redirect to home page
  if (!user) {
    return <Navigate to='/' />;
  }
  // If user is authenticated, render children components
  return children;
};

export default Protected;