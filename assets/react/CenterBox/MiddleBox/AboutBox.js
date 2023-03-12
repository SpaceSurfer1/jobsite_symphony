import React from 'react';
import { useState } from 'react';
import './AboutBox.css';
function AboutBox() {
    
    return(
        <div className="aboutbox">
            <div className="aboutbox1">
                <strong>About:</strong><textarea rows={6}cols={40}>
                    </textarea>
            </div>
            <div className="aboutbox1">
                <strong>Education:</strong><input/>
            </div>
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