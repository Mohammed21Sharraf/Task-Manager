import React from 'react'
import { Navigate, useLocation } from "react-router-dom";
import {  useSelector } from "react-redux";
import Sidebar from '../components/Sidebar/Sidebar';
import './Dashboard.scss'
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
    const { auth } = useSelector((state) => ({...state}));
    const {currentUser} = auth;
    const location = useLocation();
    if (currentUser && currentUser.token){
        return (
            <div className='grid-container'>
                <Navbar/>
              <Sidebar/>
            </div>
          )
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace />
    ) 
}

export default Dashboard