import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    
    <Router>
      {/* <Switch> */}
        <Routes>
        
        <Route path="/" component={Home} />
        {/* <Route path="/dashboard" component={Dashboard} />
         <Route path="/login" component={Login} /> */}
        </Routes>

      {/* </Switch> */}
    </Router>
  );
}

export default App;
