import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from './Add';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Add/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
