import React from 'react';
import { useState } from 'react';
import './MiddleBoxHomePage.css';
function MiddleBoxHomePage() {
    const [text, setText] = useState('bhupesh');
    
    // () => {
    //     fetch(`http://localhost:8000/lucky/number`)
    //      .then((response) => console.log(response));
    // }

    return(
        <div className="middlebox-homepage">
            {/* <h5>{text}</h5> */}
            {/* <button onClick={()=>setText(text+1)}>
                Click me!
            </button> */}
            <div className="postboxdiv">
                <form>
                    <textarea className="post-field"rows={6}cols={40}>

                    </textarea>
                    <br/>
                    <button>Post</button>
                    {/* <button>Attach Image</button> */}
                </form>
                {/* <button onClick={() => {
        fetch(`http://localhost:8000/lucky/number`)
         .then((response) => {return response.json()})
         .then(data => {if(text=="bhupesh")
            setText(data.name)
            else
            setText("bhupesh")
            })
    }}>Fetch test</button> */}
            </div>
        </div>
    );
    
}
export default MiddleBoxHomePage;