import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import { TfiWrite } from "react-icons/tfi";
import { FaUserFriends } from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import './LeftBox.css';
function LeftBox() {
    return(
        <div className="leftbox">
            <ul>
                <li><span><FcHome/></span><Link to='dash'>Dashboard</Link></li>
                
                <li><span><CgProfile/></span><Link to='myprofile'>My Profile</Link></li>

                <li><span><TfiWrite/></span><Link to='myessays'>My Essays</Link></li>

                <li><span><TfiWrite/></span><Link to='write'>Write New</Link></li>
                
                <li><span><FaUserFriends/></span><Link to='topics'>Topics</Link></li>
                
                {/* <li><span><FaUserFriends/></span><Link to='connections'>Community</Link></li> */}
            </ul>
        </div>
    );
    
}
export default LeftBox;