import React from 'react';
import { useState, useEffect} from 'react';
import './AboutBoxAboutText.css';
import Swal from 'sweetalert2';
import axios from 'axios';
function AboutBoxAboutText() {
    
    const [about, setAbout] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [isSavedAbout, setIsSavedAbout] = useState(false);

    const handleSaveAbout = () => {
        setIsSaving(true);
        let formData = new FormData();
        formData.append("about-text", about);
        axios.post('/api/setuserabout', formData)
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'User about text saved successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            setIsSavedAbout(!isSavedAbout);
            setEditabout(false);
            setIsSaving(false);
            setAbout('');
          })
          .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            });
            setIsSaving(false);
          });
    };

    

    const [aboutfetched, setAboutfetched] = useState('');
    useEffect(() => {
        axios.get(`/api/getabout`)
        .then(function (response) {
            setAboutfetched(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [isSavedAbout]);




    const [editabout, setEditabout] = useState(false);
    const showAboutEditField = () => {
        setEditabout(true);
    };
    const cancelAboutEditField = () => {
        setEditabout(false);
    };


    return(
        
        <div className="aboutbox-about">
            <strong>About:</strong>
            {!editabout &&
                <>
                    <p>{aboutfetched}</p>
                    <button onClick={showAboutEditField}>Edit</button>
                </>
            }
            {editabout &&
                <form>
                    <textarea rows={6}cols={40} value={about} onChange={(event)=>{setAbout(event.target.value)}} name="about-text"></textarea>
                    <button disabled={isSaving} onClick={handleSaveAbout} type="button">Save</button>
                    <button onClick={cancelAboutEditField}>Cancel</button>
                </form>
            }
        </div>
            
        
    );
    
}
export default AboutBoxAboutText;