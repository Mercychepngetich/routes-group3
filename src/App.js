import logo from './logo.svg';
import './App.css';
import PersonalData from "./Benedict"

function App() {
  return (
    <div className="App">
     <Routes>
   
        <Route path= '/Benedict' element ={<PersonalData/>}/>
        
     </Routes>
    </div>
  );
}

export default App;
