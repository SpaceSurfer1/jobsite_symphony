import SearchBox from './SearchBox';
import SiteNameBox from './SiteNameBox';
import './TopBox.css';
import TopOptionsBox from './TopOptions';
function TopBox() {
    return(
        <div className="topbox">
            <SiteNameBox></SiteNameBox>
            <SearchBox></SearchBox>
            {/* <TopOptionsBox></TopOptionsBox> */}
            <p>Logout</p>
        </div>
    );
    
}
export default TopBox;