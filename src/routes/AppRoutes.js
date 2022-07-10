import React, {useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "../pages/Login";
//import Dashboard from "../pages/Dashboard"
import Signup from "../pages/Signup";
import { useLocation } from "react-router";
import {ROUTE_DASHBOARD, ROUTE_SIGNUP,ROUTE_LOGIN} from "./RoutesConstants";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
    return (
        <Routes>
            <Route  extract path="/" element={<Login />} />
            <Route  extract path="/login" element={<Login />} />
            <Route  extract path="/dashboard" element={<Dashboard />} />
            <Route  extract path="/logout" element={<Login />} />
        </Routes>
    );
}