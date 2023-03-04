import React from 'react';
import { useState } from 'react';
import AboutBox from './AboutBox';
import ImageBox from './ImageBox';
import './MiddleBoxMyProfile.css';
import NameBox from './NameBox';
function MiddleBoxMyProfile() {
    
    return(
        <div className="middlebox">
            <ImageBox></ImageBox>
            <NameBox></NameBox>
            <AboutBox></AboutBox>
        </div>
    );
    
}
export default MiddleBoxMyProfile;