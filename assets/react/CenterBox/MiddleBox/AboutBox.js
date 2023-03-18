import React from 'react';
import './AboutBox.css';
import AboutBoxAboutText from './AboutBoxAboutText';
import AboutBoxEducation from './AboutBoxEducation';
function AboutBox() {
    
    return(
        <div className="aboutbox">
            <AboutBoxAboutText></AboutBoxAboutText>
            <AboutBoxEducation></AboutBoxEducation>
            <div className="aboutbox1">
                <strong>Work:</strong><input/>
            </div>
            <div className="aboutbox1">
                <strong>Interests:</strong><input/>
            </div>
        </div>
    );
    
}
export default AboutBox;