import React from 'react';
import { useState, useEffect} from 'react';
import './AboutBox.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import AboutBoxAboutText from './AboutBoxAboutText';
function AboutBox() {
    
    
    const [isSaving, setIsSaving] = useState(false);
    
    

    const [education, setEducation] = useState('');
    const [isSavedEducation, setIsSavedEducation] = useState(false);

    const handleSaveEducation = () => {
        setIsSaving(true);
        let formData = new FormData();
        formData.append("education-text", education);
        axios.post('/api/setusereducation', formData)
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'User education text saved successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            setIsSavedEducation(true);
            setEditeducation(false);
            setIsSaving(false);
            setEducation('');
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



    
    

    const [educationfetched, setEducationfetched] = useState('');
    useEffect(() => {
        axios.get(`/api/geteducation`)
        .then(function (response) {
            setEducationfetched(response.data);
            setIsSavedEducation(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [isSavedEducation]);



    const [editeducation, setEditeducation] = useState(false);
    const showEducationEditField = () => {
        setEditeducation(true);
    };




    return(
        <div className="aboutbox">
            <AboutBoxAboutText></AboutBoxAboutText>
            <div className="aboutbox1">
                <strong>Education:</strong>
                {!editeducation &&
                    <>
                        <p>{educationfetched}</p>
                        <button onClick={showEducationEditField}>Edit</button>
                    </>
                }
                {editeducation &&
                    <form>
                        <textarea rows={6}cols={40} value={education} onChange={(event)=>{setEducation(event.target.value)}} name="education-text"></textarea>
                        <button disabled={isSaving} onClick={handleSaveEducation} type="button">Save</button>
                    </form>
                }
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