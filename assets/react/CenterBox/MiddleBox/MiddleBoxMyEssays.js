import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MiddleBoxMyEssays.css';
function MiddleBoxMyEssays() {

    const [myessay, setMyessay] = useState('');

    useEffect(() => {
        axios.get(`/api/getmyessay`)
        .then(function (response) {
            setMyessay(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);


    return(
        <div className="middlebox-myessays">
            {Object.values(myessay).map((eachessay) => (
               <div className="postboxdiv">
               <p>{eachessay}</p>
               </div>
            ))}
                
                    
                
            
        </div>
    );
    
}
export default MiddleBoxMyEssays;