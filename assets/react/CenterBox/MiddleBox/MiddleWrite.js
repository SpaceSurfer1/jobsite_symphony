import React from 'react';
import {useState} from 'react';
import './MiddleWrite.css';
import Swal from 'sweetalert2';
import axios from 'axios';
function MiddleWrite() {

    const [essay, setEssay] = useState('');
    const [isSaving, setIsSaving] = useState(false);


    const handleSave = () => {
        setIsSaving(true);
        let formData = new FormData();
        formData.append("essay-text", essay);
        axios.post('/api/project', formData)
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Essay saved successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            setIsSaving(false);
            setEssay('');
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
        <div className="middle-write">
            <div className="postboxdiv">
                <form>
                    <textarea className="post-field"rows={26}cols={40} value={essay} onChange={(event)=>{setEssay(event.target.value)}} name="essay-text">
                    </textarea>
                    <br/>
                    <button disabled={isSaving} onClick={handleSave} type="button">Post</button>
                </form>
            </div>
        </div>
    );
    
}
export default MiddleWrite;