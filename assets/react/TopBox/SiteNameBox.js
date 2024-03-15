import React from 'react';
import './SiteNameBox.css';
import pen from './pen.png';
import { FcCloseUpMode } from "react-icons/fc";
function SiteNameBox() {
    return(
        <div className="sitenamebox">
            {/* <span><FcCloseUpMode/></span><h4>EssayOpinion</h4> */}
            <span><img src={pen} alt="Logo" className="sitename-image"/></span><h4>EssayOpinion</h4>
        </div>
    );
    
}
export default SiteNameBox;