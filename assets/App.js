// import logo from './logo.svg';
import './App.css';
import BottomBox from './BottomBox/BottomBox';
import CenterBox from './CenterBox/CenterBox';
import TopBox from './TopBox/TopBox';

function App() {
  return (
    <div className="App">
    <TopBox></TopBox>
    <CenterBox></CenterBox>
    <BottomBox></BottomBox>
    </div>
  );
}

export default App;
