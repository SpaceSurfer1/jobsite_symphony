import React from 'react';
import './SiteNameBox.css';
import { FcHome } from "react-icons/fc";
function SiteNameBox() {
    return(
        <div className="sitenamebox">
            <span><FcHome/></span><h4>essay.com</h4>
        </div>
    );
    
}
export default SiteNameBox;