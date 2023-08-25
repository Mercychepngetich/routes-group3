import logo from './logo.svg';
import './App.css';

import Mercy from './Mercy';
import Home from './Home';
import Benedict from './Benedict'
import { Routes, Route,Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <button style={{"marginLeft":"50%"}}><Link to="/mercy" style={{"color":'brown'}}>Mercy</Link></button>
      <button style={{"marginLeft":"50%"}}><Link to="/benedict" style={{"color":'brown'}}>Benedict</Link></button>
      <button style={{"marginLeft":"50%"}}><Link to="/sharon" style={{"color":'brown'}}>Sharon</Link></button> 
      
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/mercy' element={<Mercy/>}/>
        <Route path ='/benedict' element={<Benedict/>}/>
        <Route path ='/sharon' element={<Sharon/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
