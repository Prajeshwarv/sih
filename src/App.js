import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import { Admindashboard } from "./admindashboard";
import './App.css';
import {Dashboard} from "./dashboard";


function App() {
  return (
    <div className="App">
      <Router>   
        <Routes> 
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/admin" element={<Admindashboard/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
