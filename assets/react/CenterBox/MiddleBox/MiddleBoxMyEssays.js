import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MiddleBoxMyEssays.css';
import logo from './logo.png';
import pic from './pic.jpeg';

function MiddleBoxMyEssays() {

    const [myessay, setMyessay] = useState([]);
    const [eff, setEff] = useState(false);

    useEffect(() => {
        axios.get(`/api/getmyessay`, { params: { offset: lastId } })
        .then(function (response) {
            if(response.data.length > 0)
            {
                console.log(response.data);
                setMyessay((prevState) => [
                    ...prevState,
                    ...response.data,
                  ]);
                setLastId(response.data[response.data.length - 1].id);
            }
            else if(response.data.length == 0)
            {
                setVisible(false);
            }
            
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [eff]);


    const [visible, setVisible] = useState(true);
    const [lastId, setLastId] = useState(Number.MAX_SAFE_INTEGER);

    const handleGetMore = () => {
        setEff(!eff);
    }


    return(
        <div className="middlebox-allessays">
            {myessay.map((eachessay) => {
                return(
               <div className="essayboxdiv" key={eachessay.id} style={{border:"1px solid black"}}>

                <div style={{border:"1px none red",float:"left",width:"100%"}}>
                    <img src={pic} alt="Logo" className="home-post-profile-pic"/>
                    <p className="home-post-name">{eachessay.firstname} {eachessay.lastname}</p>
                    <p className="home-post-time">{eachessay.time}</p>
                </div>
                <div>
                    <p className="home-post-title"><b>{eachessay.essay_title}</b></p>
                </div>
                {/* <p className="home-post-email">{eachessay.email}</p> */}
                <div>
                    <p className="home-post-essay">{eachessay.id +". "+ eachessay.essay}</p>
                </div>
                
                <div>
                    <img src={logo} alt="Logo" className="home-post-image"/>
                </div>
                
               </div>);
               
        })}
            
            {visible && <button onClick={handleGetMore}>Show More</button>}
            {!visible && <p>That's All</p>}
                
            
        </div>
    );
    
}
export default MiddleBoxMyEssays;