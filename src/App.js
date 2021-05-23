import './App.css';
import loading from './assets/loading.gif';
import Form from './components/from/Form';
import JobCard from './components/jobcard/JobCard';
import Header from './components/header/Header';

function App() {
  const dummy = {
    company_logo:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQHluPICZRkHsA/company-logo_200_200/0/1577449468769?e=2159024400&v=beta&t=SU8ArbCWLdttCIu6Qpc89ppAabgH_Q4r4ERr78bOP28',
    title: 'Fullstack Developer',
    company: 'Clarusway',
    type: 'Full-time',
    company_url: 'https://clarusway.com/',
    id: 'xyz',
  };
  return (
    <div className="App">
      <Header />
      <Form />
      <JobCard job={dummy} />
    </div>
  );
}

export default App;
