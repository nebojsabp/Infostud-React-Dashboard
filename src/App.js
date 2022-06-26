import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './pages/navbar';
import Users from './pages/users';
import Developers from './pages/developers';
import Clients from './pages/clients';
import Myprofile from './pages/myprofile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Users />}/>
          <Route exact path="/developers" element={<Developers />}/>
          <Route exact path="/clients" element={<Clients />}/>
          <Route exact path="/myprofile" element={<Myprofile />}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
