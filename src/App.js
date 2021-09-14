import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import JobCard from './components/jobcard/jobcard';
import JobsList from './components/jobslist/jobslist';
import UserCard from './components/usercard/usercard';
import UsersList from './components/userslist/userlist';
import MainScreen from './screen/mainscreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen/>}>
          <Route path="/jobs" element={<JobsList/>}/>
          <Route path="/users" element={<UsersList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
