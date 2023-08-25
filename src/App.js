import logo from './logo.svg';
import './App.css';
import Mercy from './Mercy';
import Home from './Home';
import { Routes, Route,Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <button style={{"marginLeft":"50%"}}><Link to="/mercy" style={{"color":'brown'}}>Mercy</Link></button> 
      
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/mercy' element={<Mercy/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
