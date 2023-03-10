import React from 'react';
import LeftBox from '../CenterBox/LeftBox/LeftBox';
import './ProfileCircle.css';
function ProfileCircle() {
    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profilecircle')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const userRating = document.querySelector('#root');
    var isAuthenticated = userRating.dataset.eventId;
    console.log(isAuthenticated);

    return(
        <div className="dropdown">
  <button onClick={myFunction} className="profilecircle">B</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="/myprofile">{isAuthenticated}</a>
    <a href="/logout">Logout</a>
    {/* <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a> */}
    {/* <LeftBox></LeftBox> */}
  </div>
</div>
    );
    
}
export default ProfileCircle;