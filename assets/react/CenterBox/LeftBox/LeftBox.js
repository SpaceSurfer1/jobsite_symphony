import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FaUserFriends } from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import { GoGitMerge } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi";
import './LeftBox.css';
function LeftBox() {
    return(
        <div className="leftbox">
            <ul>
                <li><span><FaHome /></span><Link to='dash'>Dashboard</Link></li>
                
                <li><span><CgProfile/></span><Link to='myprofile'>My Profile</Link></li>

                <li><span><GoGitMerge /></span><Link to='myessays'>My Merged PRs</Link></li>

                <li><span><TfiWrite/></span><Link to='write'>Write New Post</Link></li>
                
                <li><span><HiOutlineBriefcase/></span><Link to='topics'>Remote Jobs</Link></li>
                
                {/* <li><span><GoGitMerge /></span><Link to='connections'>Remote Internships</Link></li> */}
            </ul>
        </div>
    );
    
}
export default LeftBox;