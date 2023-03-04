// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import BottomBox from './BottomBox/BottomBox';
import CenterBox from './CenterBox/CenterBox';
import TopBox from './TopBox/TopBox';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className="App">
    <TopBox></TopBox>
    <CenterBox></CenterBox>
    <BottomBox></BottomBox>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='myprofile' element={<MyProfile />}></Route>
    </Routes>
    </div>
  );
}

export default App;
