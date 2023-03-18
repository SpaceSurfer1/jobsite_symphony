import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MiddleBoxMyEssays.css';
function MiddleBoxMyEssays() {

    const [myessay, setMyessay] = useState('');

    useEffect(() => {
        axios.get(`/api/getmyessay`)
        .then(function (response) {
            setMyessay(response[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);


    return(
        <div className="middlebox-myessays">
            
            <div className="postboxdiv">
                <p>{myessay}</p>
            </div>
            <div className="postboxdiv">
                
            </div>
            <div className="postboxdiv">
                
            </div>
            <div className="postboxdiv">
                
            </div>
        </div>
    );
    
}
export default MiddleBoxMyEssays;