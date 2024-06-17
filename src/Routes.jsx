import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Sensorregister from "./pages/Sensorregister"
import Sensors from "./pages/Sensors";
import EditSensor from "./pages/EditSensor";
import SmartCityDetails from "./pages/Details";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Sensorregister />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/edit/:id" element={<EditSensor />} />
            <Route path="/details" element={<SmartCityDetails/>} />
            
        </Routes>

    );
};

export default AppRoutes;
