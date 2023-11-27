import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import EmployeeList from './Components/EmployeeList/EmployeeList';



function App() {
  return (
    <div>
         <Router>
            <Routes>
                  <Route exact path='/' element={<Login/>}></Route>
                  <Route exact path='/dashboard' element={<Dashboard/>}></Route>
                  <Route exact path='/employee-list' element={<EmployeeList/>}></Route>
            </Routes>
        </Router>
     

    </div>
  );
}

export default App;
