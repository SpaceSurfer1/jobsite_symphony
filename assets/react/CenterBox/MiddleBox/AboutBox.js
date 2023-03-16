import React from 'react';
import { useState } from 'react';
import './AboutBox.css';
import Swal from 'sweetalert2';
import axios from 'axios';
function AboutBox() {
    
    const [about, setAbout] = useState('');
    const [isSaving, setIsSaving] = useState(false);


    const handleSave = () => {
        setIsSaving(true);
        let formData = new FormData();
        formData.append("about-text", about);
        axios.post('/api/userabout', formData)
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'User about text saved successfully!',
                showConfirmButton: false,
                timer: 1500
            });
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


    return(
        <div className="aboutbox">
            <div className="aboutbox1">
                <strong>About:</strong><form><textarea rows={6}cols={40} value={about} onChange={(event)=>{setAbout(event.target.value)}} name="about-text">
                    </textarea><button disabled={isSaving} onClick={handleSave} type="button">Save</button></form>
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