import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MiddleBoxHomepage.css';
import logo from './logo.png';

function MiddleBoxHomepage() {

    const [myessay, setMyessay] = useState([]);
    const [eff, setEff] = useState(false);

    useEffect(() => {
        axios.get(`/api/getallessay`, { params: { offset: lastId } })
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
               <div className="postboxdiv" key={eachessay.id}>
                <p>{eachessay.firstname} {eachessay.lastname}</p>
                <p>{eachessay.email}</p>
                <p>{eachessay.essay_title}</p>
                <p>{eachessay.id +". "+ eachessay.essay}</p>
                <p>{eachessay.time}</p>
                abcdjgasuasyd
                <img src={logo} alt="Logo" />
               </div>);
               
        })}
            
            {visible && <button onClick={handleGetMore}>Show More</button>}
            {!visible && <p>That's All</p>}
                
            
        </div>
    );
    
}
export default MiddleBoxHomepage;