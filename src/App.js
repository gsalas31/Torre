import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import JobCard from './components/jobcard/jobcard';
import JobsList from './components/jobslist/jobslist';
import UserCard from './components/usercard/usercard';
import UsersList from './components/userslist/userlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
