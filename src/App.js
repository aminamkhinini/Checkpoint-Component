import React from'react'
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';


const App = ()=>(

    <div className="App">
   <ProfilPhoto/>
   <FullName/>
   <Adress/>
    </div>
  );


export default App;
