import './CenterBox.css';
import LeftBox from './LeftBox/LeftBox';
import MiddleBox from './MiddleBox/MiddleBox';
import RightBox from './RightBox/RightBox';
function CenterBox() {
    return(
        <div className="centerbox">
            <LeftBox></LeftBox>
            <MiddleBox></MiddleBox>
            <RightBox></RightBox>
        </div>
    );
    
}
export default CenterBox;