import React from 'react';
import {useState} from 'react';
import './MiddleWrite.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import MyEditor from './MyEditor';
import MyQuillEditor from './MyQuillEditor';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MiddleWrite() {

    const [essay, setEssay] = useState('');
    const [essayTitle, setEssayTitle] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const [value, setValue] = useState('');


    const handleSave = () => {
        setIsSaving(true);
        let formData = new FormData();
        formData.append("essay-text", essay);
        formData.append("essay-title-text", essayTitle);
        // console.log('formData');
        // console.log(formData);
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
                    <textarea className="post-field"rows={10}cols={40} value={essayTitle} onChange={(event)=>{setEssayTitle(event.target.value)}} name="essay-title-text">
                    </textarea>
                    <br/>
                    <br/>
                    {/* <textarea className="post-field"rows={26}cols={40} value={essay} onChange={(event)=>{setEssay(event.target.value)}} name="essay-text"> */}
                    {/* </textarea> */}
                    <br/>
                    {/* <MyEditor/> */}
                    {/* <MyQuillEditor></MyQuillEditor> */}
                    <ReactQuill theme="snow" value={essay} onChange={setEssay} />
                    <button disabled={isSaving} onClick={handleSave} type="button">Post</button>
                </form>
            </div>
        </div>
    );
    
}
export default MiddleWrite;