import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PatientLogin from './components/PatientLogin';
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/patient" component={PatientLogin} />
        <Route path="/doctor" component={DoctorPage} />
      </Switch>
    </div>
  </Router>
  );
}
export default App;
