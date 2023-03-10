import React from 'react';
import { Routes, Route } from "react-router-dom";
import './MiddleBox.css';
import MiddleBoxHomePage from './MiddleBoxHomepage';
import MiddleBoxMyProfile from './MiddleBoxMyProfile';
function MiddleBox() {
    
    return(
        <div className="middlebox">
                <Routes>
                    <Route path='dash' element={<MiddleBoxHomePage/>}></Route>
                    <Route path='myprofile' element={<MiddleBoxMyProfile/>}></Route>
                    <Route path='write' element={<MiddleBoxHomePage/>}></Route>
                </Routes>
        </div>
    );
    
}
export default MiddleBox;