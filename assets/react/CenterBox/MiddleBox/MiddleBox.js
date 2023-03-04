import React from 'react';
import { useState } from 'react';
import './MiddleBox.css';
function MiddleBox() {
    const [text, setText] = useState(0);
    
    // () => {
    //     fetch(`http://localhost:8000/lucky/number`)
    //      .then((response) => console.log(response));
    // }

    return(
        <div className="middlebox">
            <h5>{text}</h5>
            <button onClick={()=>setText(text+1)}>
                Click me!
            </button>
            <div className="postboxdiv">
                <form>
                    <textarea className="post-field"rows={6}cols={40}>

                    </textarea>
                    <br/>
                    <button>Post</button>
                    {/* <button>Attach Image</button> */}
                </form>
                <button onClick={() => {
        fetch(`http://localhost:8000/lucky/number`)
         .then((response) => console.log(response));
    }}>Fetch test</button>
            </div>
        </div>
    );
    
}
export default MiddleBox;