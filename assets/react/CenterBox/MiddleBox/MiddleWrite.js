import React from 'react';
import './MiddleWrite.css';
function MiddleWrite() {

    return(
        <div className="middle-write">
            <div className="postboxdiv">
                <form>
                    <textarea className="post-field"rows={26}cols={40}>
                    </textarea>
                    <br/>
                    <button>Post</button>
                </form>
            </div>
        </div>
    );
    
}
export default MiddleWrite;