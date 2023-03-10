import React from 'react';
import './ProfileCircle.css';
function ProfileCircle() {
    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
    return(
        <div className="dropdown">
  <button onClick={myFunction} className="profilecircle">B</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>
    );
    
}
export default ProfileCircle;