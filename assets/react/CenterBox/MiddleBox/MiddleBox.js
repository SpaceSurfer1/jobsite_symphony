import React from 'react';
import { Routes, Route } from "react-router-dom";
import './MiddleBox.css';
import MiddleBoxHomePage from './MiddleBoxHomepage';
import MiddleBoxMyEssays from './MiddleBoxMyEssays';
import MiddleBoxMyProfile from './MiddleBoxMyProfile';
import MiddleWrite from './MiddleWrite';
function MiddleBox() {
    
    return(
        <div className="middlebox">
                <Routes>
                    <Route path='dash' element={<MiddleBoxHomePage/>}></Route>
                    <Route path='myprofile' element={<MiddleBoxMyProfile/>}></Route>
                    <Route path='myessays' element={<MiddleBoxMyEssays/>}></Route>
                    <Route path='write' element={<MiddleWrite/>}></Route>
                </Routes>
        </div>
    );
    
}
export default MiddleBox;