import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import JobCard from './components/jobcard/jobcard';
import JobsList from './components/jobslist/jobslist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
