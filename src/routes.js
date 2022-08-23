import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Pdf from './pages/Pdf';
import Signup from './pages/Signup';



export const paths = {
    home: '/home',
    login: '/login',
    signup: '/signup',
    pdf: '/pdf',
    


}
export default function Router() {
    return useRoutes([
        { path: '/', element: <Navigate to="/home" replace /> },
        
        { path: paths.home, element: <Home /> },
       
        { path: paths.login, element: <Login /> },

        { path: paths.signup, element: <Signup /> },

        { path: paths.pdf, element: <Pdf />},

       
       
         ])
}
