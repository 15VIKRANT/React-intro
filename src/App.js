//import logo from './logo.svg';
import './App.css';

function App() {

  const Mobileos=['Andrioid','Blackberry','I-Phone','Windows-Phone'];
  const MobManufacturers=['Samsung','HTC','Micromax','Apple'];
  return (
    <div className="App">
 <div>
 <h1>Mobile Operating System</h1> 
     <ul>{Mobileos.map(e=>{
       return <li>{e}</li>
     })}</ul>
 
 </div>
<div>
    <h1>Mobile Manufacturers</h1> 
     <ul >{MobManufacturers.map(e=>{
       return <li>{e}</li>
     })}</ul>
    </div>
    </div>
  );
}

export default App;
