import './App.css';
import SignIn from './Pages/SignIn';
import {Routes,Route} from 'react-router-dom'
// import Welcome from './Pages/Welcome';
import SignUp from './Pages/SignUp';
// import Home from './Pages/Home';
import Calendar from './Pages/Calendar.js';
import Welcome from './Pages/Welcome copy';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
