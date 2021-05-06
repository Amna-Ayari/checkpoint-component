import React from "react"
import './App.css';
import FullName from './component/Profile/FullName';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import Adress from './component/Profile/Adress';



function App() {
  return (
    <div className="App">
     
      <FullName/>
      <ProfilePhoto/>
      <Adress/>
    </div>
  );
}

export default App;
