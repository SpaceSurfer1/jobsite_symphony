import React from 'react';
import './MiddleBoxHomePage.css';
function MiddleBoxHomePage() {

    return(
        <div className="middlebox-homepage">
            <div className="postboxdiv">
                <form>
                    <textarea className="post-field"rows={6}cols={40}>
                    </textarea>
                    <br/>
                    <button>Post</button>
                </form>
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
export default MiddleBoxHomePage;