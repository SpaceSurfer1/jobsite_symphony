import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBox.css';
function LeftBox() {
    return(
        <div className="leftbox">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='myprofile'>My Profile</Link></li>
                <li><Link to='myblogs'>My Blogs</Link></li>
                <li><Link to='connections'>Connections</Link></li>
            </ul>
        </div>
    );
    
}
export default LeftBox;