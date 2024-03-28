// @babel/plugin-proposal-private-property-in-object
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/Registration/SignUp';
import SignIn from './components/Registration/SignIn';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
