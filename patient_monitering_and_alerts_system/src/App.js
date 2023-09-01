import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientLogin from './components/PatientLogin';
import PatientDashboard from './components/PatientDashboard';
import PatientRegistrationForm from './components/PatientRegistrationForm';
import Navbar from './components/Navbar';
import PatientDetails from './components/PatientDetails';
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration';
import DoctorLogin from './components/DoctorLogin';
import DoctorRegistration from './components/DoctorRegistration';
function App() {
  return (
    <Router>

 

        <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/patient" element={<PatientLogin/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/doctor" element={<DoctorLogin/>} />
        <Route path="/pd" element={<Navbar/>} />
        <Route path="/register" element={<PatientRegistrationForm />}/>
        <Route path="/register1" element={<AdminRegistration />}/>
        <Route path="/register2" element={<DoctorRegistration />}/>
        <Route path="/patientDetails" element={<PatientDetails/>}/>
        <Route path="/logout" element={<PatientLogin/>} />
        <Route path="/login"element={PatientLogin} />
      </Routes>


   
  </Router>
  );
}
export default App;
