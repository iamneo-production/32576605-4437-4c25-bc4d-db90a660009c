import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import PatientProfile from './components/PatientProfile';
import Alerts from './components/Alerts';
import PatientMonitoringApp from './components/PateintMonitoringApp';
import { useState } from 'react';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  const [AdminLogged,setAdminLogged]=useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    
    
    <Router>
        <Routes>
        <Route path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/profile" element={<PatientProfile/>} />
        <Route path="/alerts" element={<Alerts/>} />
        <Route path="/monitor" element={<PatientMonitoringApp/>} />
        <Route path="/profile/:patientId" element={<PatientProfile/>} />

        
        </Routes>

    </Router>
  );
}

export default App;
