import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import './CenterBox.css';
import LeftBox from './LeftBox/LeftBox';
import MiddleBox from './MiddleBox/MiddleBox';
import MiddleBoxMyProfile from './MiddleBox/MiddleBoxMyProfile';
import RightBox from './RightBox/RightBox';
function CenterBox() {
    return(
        <div className="centerbox">
            <LeftBox></LeftBox>
            {/* <MiddleBox></MiddleBox> */}
            <Routes>
                <Route path='/' element={<MiddleBox/>}></Route>
                <Route path='myprofile' element={<MiddleBoxMyProfile/>}></Route>
            </Routes>
            <RightBox></RightBox>
        </div>
    );
    
}
export default CenterBox;