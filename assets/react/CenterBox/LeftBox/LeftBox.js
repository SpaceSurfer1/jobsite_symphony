import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBox.css';
function LeftBox() {
    return(
        <div className="leftbox">
            <ul>
                {/* <li><a href="">Home</a></li>
                <li><a href="">My Profile</a></li>
                <li><a href="">Connections</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Messages</a></li> */}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='myprofile'>My Profile</Link></li>
            </ul>
        </div>
    );
    
}
export default LeftBox;