import React from 'react';
import { useState } from 'react';
import './MiddleBoxMyProfile.css';
function MiddleBoxMyProfile() {
    const [text, setText] = useState(0);
    
    // () => {
    //     fetch(`http://localhost:8000/lucky/number`)
    //      .then((response) => console.log(response));
    // }

    return(
        <div className="middlebox">
            Yo
        </div>
    );
    
}
export default MiddleBoxMyProfile;