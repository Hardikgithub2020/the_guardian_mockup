import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headlines from './Components/2_Headlines';
import Spotlight from './Components/3_Spotlight';
import Header from './Components/1_Header';
import Opinion from './Components/4_Opinion';
import Sports from './Components/5_Sports'
import TodayInFocus from './Components/6_TodayInFocus';
import Culture from './Components/7_Culture'
import AcrossTheCountry from './Components/8_AcrossTheCountry';
import AroundTheWorld from './Components/9_AroundTheWorld';
import Explore from './Components/10_Explore';
import Video from './Components/11_Video'
import InPicture from './Components/12_InPictures';
import MostViewed from './Components/13_MostViewed';
import Footer from './Components/14_Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Headlines />
      <div>
        <img src={require("./Components/images/Pandamic.png")} style={{ width: "100%", height: "50%" }}/>
      </div>
      <Spotlight/>
      <Opinion />
      <Sports />
      <TodayInFocus />
      <Culture />
      <AcrossTheCountry />
      <AroundTheWorld />
      <Explore/>
      <Video />
      <InPicture/>
      <MostViewed/>
      <Footer/>
      

    </div>
  );
}

export default App;
