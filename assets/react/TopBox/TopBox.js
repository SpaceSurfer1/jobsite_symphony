import React from 'react';
import SearchBox from './SearchBox';
import SiteNameBox from './SiteNameBox';
import './TopBox.css';
import TopOptionsBox from './TopOptions';
function TopBox() {
    
    const userRating = document.querySelector('#root');
    var isAuthenticated = userRating.dataset.eventId;
    console.log(isAuthenticated);
    
    return(
        <div className="topbox">
            <SiteNameBox></SiteNameBox>
            <SearchBox></SearchBox>
            {/* <TopOptionsBox></TopOptionsBox> */}
            <p>{isAuthenticated}</p>
            <a href="http://localhost:8000/logout">Logout</a>
        </div>
    );
    
}
export default TopBox;